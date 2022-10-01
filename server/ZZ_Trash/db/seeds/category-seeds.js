const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Salt Lick Plates',
  },
  {
    category_name: 'Small Plates',
  },
  {
    category_name: 'Sandwiches',
  },
  {
    category_name: 'Meat By The LB.',
  },
  {
    category_name: 'Beverages',
  },
  {
    category_name: 'Sides',
  },
  {
    category_name: 'Desserts',
  },
  {
    category_name: 'Family Size Desserts',
  },
  {
    category_name: 'To-Go BBQ Sauce',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

//!========================= EOF =========================