'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const passport = require('passport')
//const sassMiddleware = require('node-sass-middleware');
const path = require('path');
var sass = require('node-sass');

// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').
//
// This next line requires our root index.js:
const pkg = require('APP')

const app = express()


if (!pkg.isProduction && !pkg.isTesting) {
  // Logging middleware (dev only)
  app.use(require('volleyball'))
}

module.exports = app
  // We'll store the whole session in a cookie
  .use(require('cookie-session') ({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
    maxAge : 1 * 60 * 1000 // 1 min sessions for testing
  }))

  // this renews cookie-session
  app.get('*', function(req, res, next) {
  // To update the session expiration time we need to send the new
  // expiration in the response cookie.
  // To send again the response cookie to the client we need to
  // update the session object.
  //console.log("SESSIoN:        ", req.session)
  
  req.session.renewSession = Date.now();
  next();
  })

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Authentication middleware
  .use(passport.initialize())
  .use(passport.session())


  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js'))
  .use('/js', express.static(__dirname + '/../node_modules/jquery/dist'))
  .use('/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css'))


  // Serve our api
  .use('/api', require('./api'))

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

if (module === require.main) {
  // Start listening only if we're the main module.

  // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}
