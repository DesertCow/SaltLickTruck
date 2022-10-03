const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, '👻👻 Email Address is Invalid! 👻👻'],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

//* set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//* compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;


//!========================= EOF =========================