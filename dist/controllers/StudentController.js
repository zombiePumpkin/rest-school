"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class StudentController {
  // store
  async store(req, res) {
    try {
      const newStudent = await _Student2.default.create(req.body);
      return res.json({ created: newStudent });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const students = await _Student2.default.findAll({
        attributes: [
          'id',
          'name',
          'lastname',
          'email',
          'age',
          'weight',
          'height',
        ],
        order: [
          ['id', 'desc'], [_Photo2.default, 'id', 'desc'],
        ],
        include: {
          model: _Photo2.default,
          attributes: [
            'id',
            'originalname',
            'filename',
            'url',
          ],
        },
      });
      return res.json({ students });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID not found'],
        });
      }

      const student = await _Student2.default.findByPk(id, {
        attributes: [
          'id',
          'name',
          'lastname',
          'email',
          'age',
          'weight',
          'height',
        ],
        order: [
          ['id', 'desc'], [_Photo2.default, 'id', 'desc'],
        ],
        include: {
          model: _Photo2.default,
          attributes: [
            'id',
            'originalname',
            'filename',
            'url',
          ],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      return res.json({ student });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID not found'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      const updatedStudent = await student.update(req.body);
      return res.json({ updated: updatedStudent });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID not found'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student not found'],
        });
      }

      await student.destroy();
      return res.json({ deleted: student });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new StudentController();
