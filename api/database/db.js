const db = require('../shared/models');
const ENV = require('./env');
const { logger, loggerErrKey } = require('../shared/utils');

const connectDB = async () => {
  try {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connected to MySQL database:', ENV.DB_NAME);
        if (ENV.APP === 'development') {
          db.sequelize.sync(); //creates table if they do not already exist
        }
      })
      .catch((err) => {
        console.error('Unable to connect to MySQL database:', ENV.DB_NAME, err);
      });
  } catch (err) {
    logger.error(await loggerErrKey(null, err.message));
    console.error('Unable to connect to MySQL database:', ENV.DB_NAME, err);
  }
};

module.exports = connectDB;
