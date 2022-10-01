const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = model('User', userSchema);

module.exports = User;


//!========================= EOF =========================