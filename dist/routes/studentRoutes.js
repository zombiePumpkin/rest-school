"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// controllers
var _StudentController = require('../controllers/StudentController'); var _StudentController2 = _interopRequireDefault(_StudentController);

// middlewares
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const studentRoutes = new (0, _express.Router)();

studentRoutes.get('/', _StudentController2.default.index);
studentRoutes.post('/', _loginRequired2.default, _StudentController2.default.store);
studentRoutes.put('/:id', _loginRequired2.default, _StudentController2.default.update);
studentRoutes.get('/:id', _StudentController2.default.show);
studentRoutes.delete('/:id', _loginRequired2.default, _StudentController2.default.delete);

exports. default = studentRoutes;
