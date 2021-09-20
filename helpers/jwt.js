const jwt = require('jsonwebtoken');

module.exports = class Jwt {
  static sign (payload) {
    return jwt.sign(payload, 'scan-app-secret');
  }

  static verify (token) {
    return jwt.verify(token, 'scan-app-secret');
  }
}