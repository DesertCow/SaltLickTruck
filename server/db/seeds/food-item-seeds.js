const { FoodItem } = require('../../models');

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

const Beverages = [
  {
    product_name: 'Unsweet Tea',
    price: 2.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },
  {
    product_name: 'Sweet Tea',
    price: 2.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },
  {
    product_name: 'Soda',
    price: 2.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },
  {
    product_name: 'Big Red',
    price: 2.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },
  {
    product_name: 'Bottled Water',
    price: 2.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },
  {
    product_name: 'Topo Chico',
    price: 2.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },
  {
    product_name: 'Coffee',
    price: 2.25,
    serving: null,
    measurement: null,
    available: true,
    top_category: 5,
  },


];

const Sides = [
  {
    product_name: 'Beans',
    price: 4.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 6,
  },
  {
    product_name: 'Potato Salad',
    price: 4.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 6,
  },
  {
    product_name: 'Coleslaw',
    price: 4.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 6,
  },
  {
    product_name: 'Jalapeño',
    price: 0.25,
    serving: 1,
    measurement: null,
    available: true,
    top_category: 6,
  },


];

const Desserts = [
  {
    product_name: 'Homemade Pecan Pie',
    price: 6.45,
    serving: null,
    measurement: null,
    available: true,
    top_category: 7,
  },
  {
    product_name: 'Chocolate Pecan Pie',
    price: 6.45,
    serving: null,
    measurement: null,
    available: true,
    top_category: 7,
  },
  {
    product_name: 'Cobbler (Peach)',
    price: 6.45,
    serving: null,
    measurement: null,
    available: true,
    top_category: 7,
  },
  {
    product_name: 'Cobbler (Blackberry)',
    price: 6.45,
    serving: null,
    measurement: null,
    available: true,
    top_category: 7,
  },
  {
    product_name: 'Half & Half Cobbler',
    price: 6.45,
    serving: null,
    measurement: null,
    available: true,
    top_category: 7,
  },


];

const FamilyDesserts = [
  {
    product_name: '1/2 Tray Of Cobbler (Blackberry)',
    price: 27.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 8,
  },
  {
    product_name: '1/2 Tray Of Cobbler (Peach)',
    price: 27.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 8,
  },
  {
    product_name: 'Tray Of Cobbler (Blackberry)',
    price: 54.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 8,
  },
  {
    product_name: 'Tray Of Cobbler (Peach)',
    price: 54.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 8,
  },
  {
    product_name: 'Pecan Pie',
    price: 34.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 8,
  },
  {
    product_name: 'Chocolate Pecan Pie',
    price: 34.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 8,
  },


];

const ToGoBBQ = [
  {
    product_name: '1/2 Pint',
    price: 1.75,
    serving: null,
    measurement: null,
    available: true,
    top_category: 9,
  },
  {
    product_name: '1 Pint',
    price: 3.50,
    serving: null,
    measurement: null,
    available: true,
    top_category: 9,
  },
  {
    product_name: '1 Quart',
    price: 6.90,
    serving: null,
    measurement: null,
    available: true,
    top_category: 9,
  },
  {
    product_name: '1 Gallon',
    price: 25.95,
    serving: null,
    measurement: null,
    available: true,
    top_category: 9,
  },


];

// const seedMenu = () => FoodItem.bulkCreate(productData);
// const seedMenu = () => {
//   FoodItem.bulkCreate(productData);
// }

async function seedMenu() {
  await FoodItem.bulkCreate(SaltLickPlates);
  await console.log("🟢 Main Plates Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(SmallPlates);
  await console.log("🟢 Small Plates Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(Sandwiches);
  await console.log("🟢 Sandwiches Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(MeatByTheLB);
  await console.log("🟢 Meat By The LB Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(Beverages);
  await console.log("🟢 Beverages Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(Sides);
  await console.log("🟢 Sides Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(Desserts);
  await console.log("🟢 Desserts Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(FamilyDesserts);
  await console.log("🟢 Family Desserts Loaded into Database 🟢\n\n")

  await FoodItem.bulkCreate(ToGoBBQ);
  await console.log("🟢 ToGo BBQ Sauce Loaded into Database 🟢\n\n")
}

module.exports = seedMenu;

//!========================= EOF =========================