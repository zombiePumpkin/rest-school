"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// controllers
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

const tokenRoutes = new (0, _express.Router)();

tokenRoutes.post('/', _TokenController2.default.store);

exports. default = tokenRoutes;
