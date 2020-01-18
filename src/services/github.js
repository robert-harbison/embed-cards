import GitHub from 'github-api'

// basic auth
var gh = new GitHub({
	username: process.env.GITHUB_USERNAME,
	token: process.env.GITHUB_TOKEN,
})

export function getUser(username, callback) {
	var user = gh.getUser(username)
	user.getProfile(function(err, user) {
		if (err) {
			console.log('Error getting github user. ' + err)
			return
		}

		callback(user)
	})
}
