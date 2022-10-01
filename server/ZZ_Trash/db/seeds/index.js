const seedCategories = require('./category-seeds');
const seedMenu = require('./food-item-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n\x1b[43m ~~~ DATABASE SYNCED ~~~ \x1b[0m\n');

  await seedCategories();
  console.log('\n\x1b[43m ~~~ CATEGORIES SEEDED ~~~ \x1b[0m\n');

  await seedMenu();
  console.log('\n\x1b[43m ~~~ PRODUCTS SEEDED~~~ \x1b[0m\n');

  // await seedTags();
  // console.log('\n\x1b[43m ~~~ TAGS SEEDED ~~~ \x1b[0m\n');

  // await seedProductTags();
  // console.log('\n\x1b[43m ~~~ PRODUCT TAGS SEEDED ~~~ \x1b[0m\n');

  return true;
};

// Enable NPM seeding to call and force seed via ARGV
if (process.argv[2]) {

  console.log("ARGV = " + process.argv[2].substring(1))

  if (process.argv[2].substring(1) === 'true') {
    seedAll();
  }

}

module.exports = seedAll;

//!========================= EOF =========================