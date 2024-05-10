const { JWT_SECRET, JWT_EXPIRY } = require("../config");
const jwt = require("jsonwebtoken");
class JwtService {
  static sign(payLoad, expiry = JWT_EXPIRY, secret = JWT_SECRET) {
    return jwt.sign(payLoad, secret, { expiresIn: expiry });
  }

  static verify(token, secret = JWT_SECRET) {
    return jwt.verify(token, secret);
  }
}

module.exports = JwtService;
