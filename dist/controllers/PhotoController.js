"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('upload');

class PhotoController {
  // store
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const { student_id } = req.body;
        const photo = await _Photo2.default.create({
          originalname, filename, student_id,
        });
        return res.json(photo);
      } catch (e) {
        return res.status(401).json({
          errors: ['Student not found'],
        });
      }
    });
  }
}

exports. default = new PhotoController();
