const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { CustomErrorHandler, JwtService } = require("../../services");

const LoginController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return next(CustomErrorHandler.notFound("User not exist"));
      }
      const match = password === user.password;
      //const match = bcrypt.compare(password, user.password);
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
      console.log(error);
      return next(error);
    }
  },
};

module.exports = LoginController;
