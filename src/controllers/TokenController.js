import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials'],
      });
    }

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['User not found'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Invalid password'],
        });
      }

      const { id, name } = user;
      const token = jwt.sign(
        { id, email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION,
        },
      );

      return res.json({
        token,
        user: { id, name, email },
      });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TokenController();
