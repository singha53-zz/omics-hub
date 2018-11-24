const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema( {
  googleId: String,
  analysis: Object
});

mongoose.model('users', userSchema);