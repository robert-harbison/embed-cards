import app from '../src/server'

import http from 'http'

var port = process.env.PORT || 3000
app.set('port', port)

var server = http.createServer(app)

server.listen(port)
server.on('listening', () => {
	console.log('Listening on port: ' + server.address().port)
})
