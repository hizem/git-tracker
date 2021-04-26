const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const models = require('../models');
passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: process.env.GITHUB_OAUTH_AUTHORIZATION_URL,
      tokenURL: process.env.GITHUB_OAUTH_TOKEN_URL,
      clientID: process.env.GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_OAUTH_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await models.User.findOne({
        where: { githubId: profile.githubId },
      });
      // If user already exists, just return the user
      if (existingUser) {
        existingUser.githubToken = accessToken;
        await existingUser.save();
        return done(null, existingUser);
      }
      const user = await models.User.build({ ...profile });
      user.githubToken = accessToken;
      const savedUser = await user.save();
      return done(null, savedUser);
    }
  )
);
