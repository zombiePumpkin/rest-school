"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// controllers
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

// middlewares
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const userRoutes = new (0, _express.Router)();

// Não deveria existir
// userRoutes.get('/', UserController.index); // lista usuarios
// userRoutes.get('/:id', UserController.show); // lista usuario

userRoutes.post('/', _UserController2.default.store);
userRoutes.put('/', _loginRequired2.default, _UserController2.default.update);
userRoutes.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = userRoutes;
