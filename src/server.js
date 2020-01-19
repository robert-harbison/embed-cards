import express from 'express'
import path from 'path'
import logger from 'morgan'

// Routes
import cardRoutes from './routes/github/cardRoutes'

var app = express()

// Setup View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/cards/github/', cardRoutes)

// Catch 404
app.use((req, res, next) => {
	res.render('404', {})
})

export default app
