const { Schema, model } = require('mongoose')


const orderSchema = new Schema({
  items: {
    type: String,
    // required: true,
    unique: false,
    // match: [/.+@.+\..+/, '👻👻 Email Address is Invalid! 👻👻'],
  },
  qty: {
    type: String,
    // required: true,
    // trim: true,
    unique: false,
  },
  prices: {
    type: String,
    // required: true,
    // trim: true,
    unique: false,
  },
  bill: {
    type: Number,
    // required: true,
    // trim: true,
    unique: false,
  },
  status: {
    type: String,
    // required: true,
    // trim: true,
    unique: false,
  },
  payment: {
    type: Boolean,
    // required: true,
    // trim: true,
    unique: false,
  },
  customerName: {
    type: String,
    // required: true,
    // trim: true,
    unique: false,
  },
});

const Orders = model('Order', orderSchema);


module.exports = Orders;


//!========================= EOF =========================