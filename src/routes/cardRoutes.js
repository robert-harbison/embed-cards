import express from 'express'
import { getUser } from '../services/github'
import { numberWithCommas } from '../utils'

var router = express.Router()

// Returns the repo-card view
router.get('/repo-card', function(req, res, next) {
	res.render('repo-card', { title: '' })
})

// Returns the user-card view
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

	// Check if we should render the vertical or horizontal layout
	if (isVertical) {
		// getUser(req.params.username, (json) => {
		// res.send(json)
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
			company: null,
			blog: 'http://chriswanstrath.com/',
			location: null,
			email: null,
			hireable: null,
			bio: '🍔',
			public_repos: 107,
			public_gists: 273,
			followers: 20880,
			following: 210,
			created_at: '2007-10-20T05:24:19Z',
			updated_at: '2019-11-01T21:56:00Z',
		}
		res.render('user-card', {
			theme: theme,
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
		})
		// })
	} else {
		// TODO: Render horizontal profile
	}
})

export default router
