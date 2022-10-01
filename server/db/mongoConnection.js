
const mongoose = require('mongoose');

require('dotenv').config();
const { config } = require('dotenv');

//TODO: Fix .env File not being imported!

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://192.168.25.10:27017/SaltLickTruck-DB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;


//!========================= EOF =========================