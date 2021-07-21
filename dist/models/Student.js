"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The name must be between 3 and 255 characters',
            },
          },
        },
        lastname: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The lastname must be between 3 and 255 characters',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          unique: {
            msg: 'The email already exists',
          },
          validate: {
            isEmail: {
              msg: 'Invalid email',
            },
          },
        },
        age: {
          type: _sequelize2.default.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: 'The age must be an INTEGER type',
            },
          },
        },
        weight: {
          type: _sequelize2.default.FLOAT,
          defaultValue: 0.0,
          validate: {
            isFloat: {
              msg: 'The weight must be an FLOAT or INTEGER type',
            },
          },
        },
        height: {
          type: _sequelize2.default.FLOAT,
          defaultValue: 0.0,
          validate: {
            isFloat: {
              msg: 'The height must be an FLOAT or INTEGER type',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
} exports.default = Student;
