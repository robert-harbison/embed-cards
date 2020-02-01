import { request } from '@octokit/request'

export async function getUser(username) {
	return await request('GET /users/:username', {
		username: username,
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`,
			Accept: 'application/vnd.github.machine-man-preview+json',
		},
	})
}

export async function getRepo(username, repo) {
	return await request('GET /repos/:username/:repo', {
		username: username,
		repo: repo,
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`,
			Accept: 'application/vnd.github.machine-man-preview+json',
		},
	})
}
