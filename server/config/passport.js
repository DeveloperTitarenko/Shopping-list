const User = require('../models/User.model')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const opts = {}

opts._jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  console.log(jwt_payload)
  User.findOne({_id: jwt_payload.id}, function (err, user) {
    if(err) {
      return done(err, false)
    }
    if(user) {
      return done(null, user)
    } else {
      return done(err, false)
    }
  })
}))


//GOOGLE

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
//
// passport.serializeUser(function(user, done) {
//   done(null, user);
// })
//
// passport.deserializeUser(function(user, done) {
//   // User.findById(id, function(err, user) {
//   //   done(err, user);
//   // });
//   done(null, user)
// })
//
// passport.use(new GoogleStrategy({
//     clientID: '715191897870-nnpm0nql9i1qd6jpd9qvjv9577r80elr.apps.googleusercontent.com',
//     clientSecret: 'OCfendqv0jXfXoYBnO_RMhx4',
//     callbackURL: "http://localhost:4000//google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//   //Нужно проверить зарегистрирован ли пользователь в нашей бд
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return done(err, user);
//     // });
//     return done(null, profile)
//   }
// ));