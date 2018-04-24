require('dotenv').config()

const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive')

const app = express()
const port = 4000
const {
  CONNECTION_STRING,
  SESSION_SECRET
} = process.env

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  app.listen(port, () => console.log(`Server running on port: ${port}`))
})
