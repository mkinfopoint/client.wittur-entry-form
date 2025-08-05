const passport = require('passport');
const jwtStrategy = require('../strategies/jwtStrategy');
const googleStrategy = require('../strategies/googleStrategy');

jwtStrategy(passport);
googleStrategy(passport);

module.exports = passport;
