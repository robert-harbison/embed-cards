var express = require('express')
var path = require('path')
var logger = require('morgan')

var cardRoutes = require('./routes/cardRoutes')

var app = express()

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/cards', cardRoutes)

// Catch 404
app.use(function(req, res, next) {
	res.status(404).send('Not Found')
})

module.exports = app
