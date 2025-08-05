const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { logger, loggerErrKey } = require('../../shared/utils');

module.exports = async function (req, res, next) {
  // Get token from header
  const headerToken = req.headers.authorization;

  if (!headerToken) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  if (headerToken) {
    try {
      const token = headerToken.replace('Bearer ', '');
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedToken) {
        const user = await User.findOne({
          where: {
            id: decodedToken.id,
          },
        });
        if (user) {
          req.user = user;
        } else {
          return res.status(401).send('Unauthorized');
        }
        return next();
      } else {
        return res.status(401).send('Unauthorized');
      }
    } catch (error) {
      logger.error(loggerErrKey(req, error.message));
      return res.status(401).send('Unauthorized');
    }
  } else {
    return res.status(401).send('Unauthorized');
  }

  //   next();
};
