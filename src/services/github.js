// import GitHub from 'github-api'
import { App } from '@octokit/app'
import { request } from '@octokit/request'

import fs from 'fs'
import path from 'path'

var githubCert = path.resolve(__dirname, '../../ssl/github.pem')

const app = new App({ id: process.env.GITHUB_APP_ID, privateKey: fs.readFileSync(githubCert) })
const jwt = app.getSignedJsonWebToken()

export async function getUser(username) {
	return await request('GET /users/:username', {
		username: username,
		headers: {
			// authorization: `token ${installationAccessToken}`,
			accept: 'application/vnd.github.machine-man-preview+json',
		},
	})
}

export async function getRepo(username, repo) {
	return await request('GET /repos/:username/:repo', {
		username: username,
		repo: repo,
		headers: {
			// authorization: `token ${installationAccessToken}`,
			accept: 'application/vnd.github.machine-man-preview+json',
		},
	})
}
