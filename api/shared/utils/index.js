const fs = require('fs');
const path = require('path');

const utils = {};

// Automatically require all JS files in the folder except `index.js`
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const moduleExports = require(path.join(__dirname, file));
    Object.assign(utils, moduleExports); // Merge all exports into `utils`
  });

module.exports = utils;
