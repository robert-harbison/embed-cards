import express from 'express'
import { getUser } from '../../services/github'
import { numberWithCommas } from '../../utils'

var router = express.Router()

// Returns the repo-card view
router.get('/repo-card', function(req, res, next) {
	res.render('github/repo-card', { title: '' })
})

/**
 * @api {get} /api/cards/user-card/:github_username
 * @apiName GetUserCard
 * @apiGroup GithubCards
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
 * @apiSuccess {HTML} EmbeddableCardPage The Github user card.
 */
router.get('/user-card/:username', function(req, res, next) {
	// Demo API values for testing
	var json = {
		login: 'defunkt',
		id: 2,
		node_id: 'MDQ6VXNlcjI=',
		avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
		gravatar_id: '',
		url: 'https://api.github.com/users/defunkt',
		html_url: 'https://github.com/defunkt',
		followers_url: 'https://api.github.com/users/defunkt/followers',
		following_url: 'https://api.github.com/users/defunkt/following{/other_user}',
		gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
		starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
		subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
		organizations_url: 'https://api.github.com/users/defunkt/orgs',
		repos_url: 'https://api.github.com/users/defunkt/repos',
		events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
		received_events_url: 'https://api.github.com/users/defunkt/received_events',
		type: 'User',
		site_admin: false,
		name: 'Chris Wanstrath',
		company: 'A Company',
		blog: 'http://chriswanstrath.com/',
		location: null,
		email: null,
		hireable: null,
		// bio: '🍔',
		bio:
			'160 asdasd asdasd asdsadasd asd ad asd asd asd asd a adasdasdas dasd asdasdas dasd asdasdasd asda sda sdasdna ,msndkajshfkjsl dhfkljasdhf klsajdhf asdhf osahfjd',
		public_repos: 107,
		public_gists: 273,
		followers: 20880,
		following: 210,
		created_at: '2007-10-20T05:24:19Z',
		updated_at: '2019-11-01T21:56:00Z',
	}

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
	// TODO: Add validation that this is either normal or large
	let size = req.query.size || 'normal'

	// getUser(req.params.username, (json) => {
	// res.send(json)

	// If one of the returned fields is blank don't include it. (This is only for fields that could be blank)
	includeCompany = json.company !== '' ? includeCompany : false
	includeBio = json.bio !== '' ? includeBio : false

	// The variables are used in both vertical and horizontal views so we pass all of them to both.
	let renderVars = {
		theme: theme,
		size: size,
		name: json.name,
		username: json.login,
		followers: numberWithCommas(json.followers),
		gists: numberWithCommas(json.public_gists),
		bio: json.bio,
		repos: numberWithCommas(json.public_repos),
		company: json.company,
		avatar: json.avatar_url,
		url: json.html_url,
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
	// })
})

export default router
