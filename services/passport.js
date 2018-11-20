const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

// encrypt user
passport.serializeUser((user, done) => {
  // done(error, userRecord)
  done(null, user.id);
});

// decrypt user
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});


// make specific strategy available to passport
// console.developers.google.com
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser){
          // done(error, userRecord)
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id})
          .save()
          .then(user => done(null, user))
        }
      });
  })
);