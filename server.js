const express = require('express');
const path = require('path');
const app = express();

// Serve React build
app.use(express.static(path.join(__dirname, 'client/build')));

// simple API end point
app.get('/api/msg', (req, res) => {
  const msg = 'learn react';
  res.json(msg)
});

// catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });