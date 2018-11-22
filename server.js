const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || keys.mongoURI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const app = express();

// make use of cookies in app
app.use(
  cookieSession({
    maxAge: 30 * 24* 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// use auth routes
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === "production"){
  // Serve React build
  app.use(express.static(path.join(__dirname, 'client/build')));

  // catch all handler
  const path = require('path');
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
}

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });