const { FoodItems } = require('../models');

const SaltLickPlates = [
  {
    product_name: 'Brisket',
    price: 18.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Pork Ribs',
    price: 16.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Bison Ribs',
    price: 25.95,
    serving: 2,
    measurement: "Ribs",
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Beef Ribs',
    price: 25.95,
    serving: 2,
    measurement: "Ribs",
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Turkey',
    price: 16.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Sausage',
    price: 12.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Chicken',
    price: 14.95,
    serving: 0.5,
    measurement: "LB",
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Pulled Pork',
    price: 14.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: 'Vegetable',
    price: 9.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Thurman's Choice",
    price: 19.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Brisket & Pork Ribs",
    price: 17.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Pulled Pork & Brisket",
    price: 17.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Brisket & Turkey",
    price: 17.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Pulled Pork & Brisket",
    price: 17.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Pulled Pork Combo",
    price: 16.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Pork Ribs Combo",
    price: 16.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Sausge & Turkey",
    price: 16.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Brisket & Bison Rib",
    price: 25.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Bison & Beef Ribs",
    price: 25.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },
  {
    product_name: "Brisket & Beef Ribs",
    price: 25.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 1,
  },

];

const SmallPlates = [
  {
    product_name: 'Brisket',
    price: 10.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 2,
  },
  {
    product_name: 'Pork Ribs',
    price: 9.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 2,
  },
  {
    product_name: 'Sausge',
    price: 8.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 2,
  },
  {
    product_name: 'Pulled Pork',
    price: 9.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 2,
  },
  {
    product_name: 'Turkey',
    price: 9.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 2,
  },
  {
    product_name: 'Combo',
    price: 10.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 2,
  },

];

const Sandwiches = [
  {
    product_name: 'Sliced or Chopped Beef',
    price: 13.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 3,
  },
  {
    product_name: 'Pulled Pork',
    price: 11.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 3,
  },
  {
    product_name: 'Sausge',
    price: 10.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 3,
  },
  {
    product_name: 'Turkey',
    price: 13.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 3,
  },
  {
    product_name: "Marino's Triple Chop",
    price: 13.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 3,
  },
  {
    product_name: 'Make It A Plate',
    price: 2.00,
    serving: null,
    measurement: null,
    available: true,
    top_category: 3,
  },

];

const MeatByTheLB = [
  {
    product_name: '1/2 LB Brisket',
    price: 13.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 4,
  },
  {
    product_name: '1/2 LB Pork Ribs',
    price: 11.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 4,
  },
  {
    product_name: '1/2 LB Sausge',
    price: 10.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 4,
  },
  {
    product_name: '1/2 LB Turkey',
    price: 13.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 4,
  },
  {
    product_name: "1/2 LB Chicken",
    price: 13.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 4,
  },
  {
    product_name: '1/2 LB Pulled Pork',
    price: 9.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 4,
  },
  {
    product_name: 'Bison Ribs',
    price: 2.00,
    serving: 2,
    measurement: "Ribs",
    available: true,
    top_category: 4,
  },
  {
    product_name: 'Beef Ribs',
    price: 2.00,
    serving: 2,
    measurement: "Ribs",
    available: true,
    top_category: 4,
  },

];

// const seedMenu = () => FoodItems.bulkCreate(productData);
// const seedMenu = () => {
//   FoodItems.bulkCreate(productData);
// }

async function seedMenu() {
  await FoodItems.bulkCreate(SaltLickPlates);
  await console.log("🟢 Main Plates Loaded into Database 🟢\n\n")

  await FoodItems.bulkCreate(SmallPlates);
  await console.log("🟢 Small Plates Loaded into Database 🟢\n\n")

  await FoodItems.bulkCreate(Sandwiches);
  await console.log("🟢 Sandwiches Loaded into Database 🟢\n\n")

  await FoodItems.bulkCreate(MeatByTheLB);
  await console.log("🟢 Meat By The LB Loaded into Database 🟢\n\n")
}

module.exports = seedMenu;

//!========================= EOF =========================