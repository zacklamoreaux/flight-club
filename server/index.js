require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      utils = require('./utils'),
      _ = require('lodash')

const app = express()
const port = 4000
const {
  CONNECTION_STRING,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  SUCCESS_REDIRECT
} = process.env

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  if (req.session.user) {
    req.user = req.session.user
  }
  next()
})

app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CALLBACK_URL,
  scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  const db = app.get('db')
  const { id, display_name } = profile
  db.find_user([id]).then( users => {
    if (users[0]) {
      return done(null, users[0].id)
    } else {
      db.create_user([display_name, id]).then( createUser => {
        return done(null, createUser[0].id)
      })
    }
  })
}))

passport.serializeUser( (id, done) => {
  console.log(id)
  return done(null, id);
})
passport.deserializeUser( (id, done) => {
  app.get('db').find_session_user([id]).then( user => {
    done(null, user[0])
  })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: SUCCESS_REDIRECT
}))

app.get('/auth/me', function(req, res) {
  if(req.user) {
    res.status(200).send(req.user)
  } else {
    res.sendStatus(401)
  }
})

app.get('/logout', function(req, res) {
  req.logout()
  res.redirect(SUCCESS_REDIRECT)
})



app.get('/clone/product/:id', function(req, res) {
  const db = req.app.get('db')

  db.get_product_by_id([req.params.id]).then( product => {
    console.log(product)
    res.status(200).send(product[0])
  })
})

app.get('/clone/products/:brand', function(req, res) {
  const db = req.app.get('db')
  

  db.get_products_by_brand([req.params.brand]).then( product => {
    console.log(product)
    res.status(200).send(product)
  })
})

app.get('/clone/products/:model', function (req, res) {
  const db = req.app.get('db')

  db.get_products_by_model([req.params.model]).then( product => {
    console.log(product)
    res.status(200).send(product)
  })
})



massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  app.listen(port, () => console.log(`Server running on port: ${port}`))
})
