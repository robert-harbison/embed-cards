import express from 'express'
import { getUser, getRepo } from '../../services/github'
import { numberWithCommas } from '../../utils'

var router = express.Router()

/**
 * @api {get} /cards/github/repo-card/:owner/:repo
 * @apiName GetRepoCard
 * @apiGroup Github
 * @apiDescription Gets the repo-card view for the specified repo. (Usually used in iFrame).
 *
 * @apiParam (Include Info) {Boolean} includeCreatedBy Should the users username be included.
 * @apiParam (Include Info) {Boolean} includeForks Should the follower count be included.
 * @apiParam (Include Info) {Boolean} includeWatchers Should the users gist count be included.
 * @apiParam (Include Info) {Boolean} includeStars Should the users bio be included.
 * @apiParam (Include Info) {Boolean} includeDescription Should the users repo count be included.
 * @apiParam (Include Info) {Boolean} includeLicense Should the users company be included.
 *
 * @apiParam (Card Settings) {String} theme Should the card use the "dark" or "light" theme. This can be left out. Defaults to light.
 * @apiParam (Card Settings) {String} showFullname Should we show the fullname or short name. (Defaults to true)
 *
 * @apiSuccess {HTML} EmbeddableCardPage The Github repo card. (Usually used in a iFrame)
 */
router.get('/repo-card/:owner/:repo', function(req, res, next) {
	// Checks what to include and what not to include
	let includeCreatedBy = req.query.includeCreatedBy ? req.query.includeCreatedBy == 'true' : true
	let includeForks = req.query.includeForks ? req.query.includeForks == 'true' : true
	let includeWatchers = req.query.includeWatchers ? req.query.includeWatchers == 'true' : true
	let includeStars = req.query.includeStars ? req.query.includeStars == 'true' : true
	let includeDescription = req.query.includeDescription ? req.query.includeDescription == 'true' : true
	let includeLicense = req.query.includeLicense ? req.query.includeLicense == 'true' : true

	// Get other variables for the card
	let theme = req.query.theme || 'light'
	let showFullname = req.query.showFullname ? req.query.showFullname == 'true' : true // Use full name or part name

	getRepo(req.params.owner, req.params.repo)
		.then((json) => {
			let renderVars = {
				theme: theme,
				showFullname: showFullname,
				name: json.data.name,
				full_name: json.data.full_name,
				username: json.data.owner.login,
				url: json.data.html_url,
				description: json.data.description,
				stars: json.data.stargazers_count,
				watchers: json.data.watchers_count,
				forks: json.data.forks_count,
				license: json.data.license.key,
				include: {
					createdBy: includeCreatedBy,
					forks: includeForks,
					watchers: includeWatchers,
					stars: includeStars,
					description: includeDescription,
					license: includeLicense,
				},
			}

			res.render('github/repo-card', renderVars)
		})
		.catch(console.log)
})

/**
 * @api {get} /cards/github/user-card/:github_username
 * @apiName GetUserCard
 * @apiGroup Github
 * @apiDescription Gets the user-card view for the specified user. (Usually used in iFrame). If company or bio is left out it will be disabled automatically.
 *
 * @apiParam (Include Info) {Boolean} includeName Should the users name be included.
 * @apiParam (Include Info) {Boolean} includeUsername Should the users username be included.
 * @apiParam (Include Info) {Boolean} includeFollowers Should the follower count be included.
 * @apiParam (Include Info) {Boolean} includeGists Should the users gist count be included.
 * @apiParam (Include Info) {Boolean} includeBio Should the users bio be included.
 * @apiParam (Include Info) {Boolean} includeRepos Should the users repo count be included.
 * @apiParam (Include Info) {Boolean} includeCompany Should the users company be included.
 * @apiParam (Include Info) {Boolean} includeAvatar Should the users avatar be included.
 *
 * @apiParam (Card Settings) {Boolean} isVertical Should the card use the vertical (true) or horizontal (false) layout. This can be left out. Defaults to vertical.
 * @apiParam (Card Settings) {String} theme Should the card use the "dark" or "light" theme. This can be left out. Defaults to light.
 * @apiParam (Card Settings) {String} size Should the card be "normal" or "large" size. This can be left out. Currently only works on vertical layouts. Defaults to normal.
 *
 * @apiSuccess {HTML} EmbeddableCardPage The Github user card. (Usually used in a iFrame)
 */
router.get('/user-card/:username', function(req, res, next) {
	// Checks what to include and what not to include
	let includeName = req.query.includeName ? req.query.includeName == 'true' : true
	let includeUsername = req.query.includeUsername ? req.query.includeUsername == 'true' : true
	let includeFollowers = req.query.includeFollowers ? req.query.includeFollowers == 'true' : true
	let includeGists = req.query.includeGists ? req.query.includeGists == 'true' : true
	let includeBio = req.query.includeBio ? req.query.includeBio == 'true' : true
	let includeRepos = req.query.includeRepos ? req.query.includeRepos == 'true' : true
	let includeCompany = req.query.includeCompany ? req.query.includeCompany == 'true' : true
	let includeAvatar = req.query.includeAvatar ? req.query.includeAvatar == 'true' : true

	// Get other variables for the card
	let isVertical = req.query.vertical ? req.query.vertical == 'true' : true
	let theme = req.query.theme || 'light'
	let size = req.query.size || 'normal'

	let test = getUser(req.params.username)
		.then((json) => {
			// If one of the returned fields is blank don't include it. (This is only for fields that could be blank)
			includeCompany = json.data.company != null ? includeCompany : false
			includeBio = json.data.bio != null ? includeBio : false

			// The variables are used in both vertical and horizontal views so we pass all of them to both.
			let renderVars = {
				theme: theme,
				size: size,
				name: json.data.name,
				username: json.data.login,
				followers: numberWithCommas(json.data.followers),
				gists: numberWithCommas(json.data.public_gists),
				bio: json.data.bio,
				repos: numberWithCommas(json.data.public_repos),
				company: json.data.company,
				avatar: json.data.avatar_url,
				url: json.data.html_url,
				include: {
					name: includeName,
					username: includeUsername,
					followers: includeFollowers,
					gists: includeGists,
					bio: includeBio,
					repos: includeRepos,
					company: includeCompany,
					avatar: includeAvatar,
				},
			}

			// Check if we should render the vertical or horizontal layout
			if (isVertical) {
				res.render('github/user-card-vertical', renderVars)
			} else {
				res.render('github/user-card-horizontal', renderVars)
			}
		})
		.catch(console.log)
})

export default router
