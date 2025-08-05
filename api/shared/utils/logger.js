const winston = require('winston');
require('winston-daily-rotate-file');
const moment = require('moment');

const isDev = process.env.APP === 'development';

const logFormat = winston.format.printf(
  ({ timestamp, level, message, ...meta }) => {
    if (isDev) {
      // 🎯 **Development: Show only `msg` in console**
      if (typeof message === 'object') {
        return `[${level.toUpperCase()}] ${JSON.stringify(message, null, 2)}`;
      }
      return `[${level.toUpperCase()}] ${message}`;
    } else {
      // 🏭 **Production: JSON format for logs**
      return JSON.stringify({
        service: `${process.env.CLIENT}-api`,
        msg: message,
        time: moment().format('DD MMMM YYYY hh:mm a'),
        timestamp,
        ...meta,
      });
    }
  }
);

const logger = winston.createLogger({
  level: isDev ? 'debug' : 'error',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
});

// 🚀 **Development Mode: Console Logging Only**
if (isDev) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        logFormat
      ),
    })
  );
} else {
  // 🏭 **Production Mode: File Logging Only**
  logger.add(
    new winston.transports.DailyRotateFile({
      filename: `${process.env.CLIENT}-error-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      maxSize: '1m',
      maxFiles: 2,
      dirname: 'logs',
    })
  );
  logger.add(
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  );
  logger.add(new winston.transports.File({ filename: 'combined.log' }));
}

const loggerErrKey = async (request = null, errMsg) => {
  const ErrMsgs = {
    a_url: request ? request.originalUrl : '',
    b_errMsg: errMsg,
    c_method: request ? request.method : '',
    d_body: request ? request.body : '',
  };
  return ErrMsgs;
};

module.exports = { logger, loggerErrKey };
