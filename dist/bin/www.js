'use strict';

var _server = require('../src/server');

var _server2 = _interopRequireDefault(_server);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
_server2.default.set('port', port);

var server = _http2.default.createServer(_server2.default);

server.listen(port);
server.on('listening', function () {
	console.log('Listening on port: ' + server.address().port);
});