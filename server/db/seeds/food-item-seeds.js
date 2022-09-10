const { FootItems } = require('../models');

const productData = [
  {
    product_name: 'Brisket',
    price: 18.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Pork Ribs',
    price: 16.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Bison Ribs',
    price: 25.95,
    serving: 2,
    measurement: "Ribs",
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Beef Ribs',
    price: 25.95,
    serving: 2,
    measurement: "Ribs",
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Turkey',
    price: 16.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Sausage',
    price: 12.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Chicken',
    price: 14.95,
    serving: 0.5,
    measurement: "LB",
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Pulled Pork',
    price: 14.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },
  {
    product_name: 'Vegetable',
    price: 9.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },
  {
    product_name: "Thurman's Choice",
    price: 19.95,
    serving: null,
    measurement: null,
    available: 'true',
    top_category: 1,
  },

];

const seedMenu = () => FootItems.bulkCreate(productData);

module.exports = seedMenu;

//!========================= EOF =========================