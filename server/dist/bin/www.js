'use strict';

var app = require('../src/server');

var http = require('http');

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	console.log('Listening on ' + bind);
}