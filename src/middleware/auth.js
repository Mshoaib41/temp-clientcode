const { CustomErrorHandler, JwtService } = require("../services");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(CustomErrorHandler.unAuthorized());
  }

  const token = authHeader.split(" ")[1];
  try {
    const { id } = await JwtService.verify(token);

    const user = {
      id,
    };
    req.user = user;
    next();
  } catch (error) {
    return next(CustomErrorHandler.unAuthorized(error));
  }
};

module.exports = auth;
