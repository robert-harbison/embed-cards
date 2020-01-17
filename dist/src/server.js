'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cardRoutes = require('./routes/cardRoutes');

var _cardRoutes2 = _interopRequireDefault(_cardRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Setup View Engine


// Routes
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.use('/api/cards', _cardRoutes2.default);

// Catch 404
app.use(function (req, res, next) {
	res.status(404).send('Not Found');
});

exports.default = app;