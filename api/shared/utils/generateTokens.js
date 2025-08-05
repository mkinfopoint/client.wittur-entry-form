// utils/token.js (example file)

const jwt = require('jsonwebtoken');
const ENV = require('../../database/env');

const generateTokens = (user) => {
  const payload = {
    id: user.id,
    name: user.userName,
    email: user.email,
  };

  const token = jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRATION,
  });

  const refreshToken = jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET, {
    expiresIn: ENV.REFRESH_TOKEN_EXPIRATION,
  });

  return { token, refreshToken };
};

module.exports = generateTokens;
