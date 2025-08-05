const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../../shared/models');
const ENV = require('../../database/env');

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: ENV.JWT_SECRET,
      },
      async (jwt_payload, done) => {
        try {
          const user = await User.findByPk(jwt_payload.id);
          if (user) return done(null, user);
          return done(null, false);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};
