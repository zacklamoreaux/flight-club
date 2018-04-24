require('dotenv').config()

const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0')

const app = express()
const port = 4000
const {
  CONNECTION_STRING,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL
} = process.env


app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CALLBACK_URL,
  scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  // console.log(profile)
  done(null, profile)
}))

passport.serializeUser( (profile, done) => {
  done(null, profile);
})
passport.deserializeUser( (profile, done) => {
  done(null, profile);
})

app.get('/auth', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000'
}))

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  app.listen(port, () => console.log(`Server running on port: ${port}`))
})
