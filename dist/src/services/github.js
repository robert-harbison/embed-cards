'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUser = getUser;

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// basic auth
var gh = new _githubApi2.default({
	username: 'FOO',
	password: 'NotFoo'
	/* also acceptable:
       token: 'MY_OAUTH_TOKEN'
     */
});

function getUser(username) {
	var user = gh.getUser(username);
	var userData = {};
	user.getProfile(function (err, user) {
		if (err) {
			console.log('Error getting github user. ' + err);
			return;
		}

		userData = user;
	});

	console.log(userData);
}