var express = require('express')
var router = express.Router()

router.get('/repo-card', function(req, res, next) {
	res.render('index', { title: 'Express' })
})

router.get('/user-card', function(req, res, next) {
	res.send('user card')
})

module.exports = router
