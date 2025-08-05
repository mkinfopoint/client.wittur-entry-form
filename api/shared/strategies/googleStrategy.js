const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models');

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.API_URL + 'auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user already exists in the database
          const userCheck = await User.findOne({
            where: {
              email: profile.emails[0].value,
            },
          });

          if (userCheck) {
            await User.update(
              {
                googleId: profile.id,
              },
              {
                where: {
                  email: profile.emails[0].value,
                },
              }
            );
          }

          let user = await User.findOne({ where: { googleId: profile.id } });
          // If not, create a new user
          if (!user) {
            user = await User.create({
              googleId: profile.id,
              userName: profile.displayName,
              email: profile.emails[0].value,
            });
          }

          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};
