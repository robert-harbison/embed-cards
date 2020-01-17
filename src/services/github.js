import GitHub from 'github-api'

// basic auth
var gh = new GitHub({
	username: 'FOO',
	password: 'NotFoo',
	/* also acceptable:
       token: 'MY_OAUTH_TOKEN'
     */
})

export function getUser(username) {
	var user = gh.getUser(username)
	var userData = {}
	user.getProfile(function(err, user) {
		if (err) {
			console.log('Error getting github user. ' + err)
			return
		}

		userData = user
	})

	console.log(userData)
}
