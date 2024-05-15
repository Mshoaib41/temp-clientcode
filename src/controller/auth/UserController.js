const bcrypt = require('bcrypt')
const { User } = require("../../models");
const { CustomErrorHandler, JwtService } = require("../../services");

const LoginController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return next(CustomErrorHandler.notFound("User does not exist"));
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return next(CustomErrorHandler.wrongCredential("Incorrect Password"));
      }

      const accToken = JwtService.sign({
        id: user._id,
        email: user.email,
      });

      const refToken = JwtService.sign(
        {
          id: user._id,
          email: user.email,
        },
        "1y"
      );

      res.json({
        status: 200,
        message: "Login Successfully",
        data: user,
        accessToken: accToken,
        refreshToken: refToken,
      });
    } catch (error) {
      return next(error);
    }
  },
  async register(req, res, next) {
    const {
      email,
      password,
    } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const checkUser = await User.findOne({ email });
    if (checkUser) {
        return next(CustomErrorHandler.notFound("User already exist"));
    }
    const user = await User.create({
      email,
      password: hashPassword,
    });

    res.json({
      status: 200,
      message: "Register Successfully",
      data: user,
    });
  }
};

module.exports = LoginController;
