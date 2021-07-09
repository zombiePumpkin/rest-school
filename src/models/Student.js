import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The name must be between 3 and 255 characters',
            },
          },
        },
        lastname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The lastname must be between 3 and 255 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
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
          type: Sequelize.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: 'The age must be an INTEGER type',
            },
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
          validate: {
            isFloat: {
              msg: 'The weight must be an FLOAT or INTEGER type',
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
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
}
