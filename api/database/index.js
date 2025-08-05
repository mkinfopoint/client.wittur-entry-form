const ENV = require('./env');

module.exports = {
  development: {
    username: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
