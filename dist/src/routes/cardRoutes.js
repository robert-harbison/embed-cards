'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Returns the repo-card view
router.get('/repo-card', function (req, res, next) {
	res.render('repo-card', { title: 'Express' });
});

// Returns the user-card view
router.get('/user-card/:username', function (req, res, next) {
	var includeName = req.query.includeName ? req.query.includeName == 'true' : true;
	var includeUsername = req.query.includeUsername || true;
	var includeFollowers = req.query.includeFollowers || true;
	var includeGists = req.query.includeGists || true;
	var includeBio = req.query.includeBio || true;
	var includeRepos = req.query.includeRepos || true;
	var includeCompany = req.query.includeCompany || false;
	var includeAvatar = req.query.includeAvatar || true;

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
});

exports.default = router;