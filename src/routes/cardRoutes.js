import express from 'express'
import fetch from 'node-fetch'

var router = express.Router()

// Returns the repo-card view
router.get('/repo-card', function(req, res, next) {
	res.render('repo-card', { title: 'Express' })
})

// Returns the user-card view
router.get('/user-card/:username', function(req, res, next) {
	let includeName = req.query.includeName ? req.query.includeName == 'true' : true
	let includeUsername = req.query.includeUsername || true
	let includeFollowers = req.query.includeFollowers || true
	let includeGists = req.query.includeGists || true
	let includeBio = req.query.includeBio || true
	let includeRepos = req.query.includeRepos || true
	let includeCompany = req.query.includeCompany || false
	let includeAvatar = req.query.includeAvatar || true

	// fetch('https://api.github.com/users/defunkt')
	// 	.then((res) => res.json())
	// 	.then((json) => {
	// 		console.log(includeName)
	// 		res.render('user-card', {
	// 			name: json.name,
	// 			username: json.login,
	// 			followers: json.followers,
	// 			gists: json.public_gists,
	// 			bio: json.bio,
	// 			repos: json.public_repos,
	// 			company: json.company,
	// 			avatar: json.avatar_url,
	// 			url: json.html_url,
	// 			include: {
	// 				name: includeName,
	// 				username: includeUsername,
	// 				followers: includeFollowers,
	// 				gists: includeGists,
	// 				bio: includeBio,
	// 				repos: includeRepos,
	// 				company: includeCompany,
	// 				avatar: includeAvatar,
	// 			},
	// 		})
	// 	})
})

export default router
