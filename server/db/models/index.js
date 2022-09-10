// import models
const FoodItem = require('./Food-Items');
const Category = require('./Category');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');

//* FoodItem belongsTo Category
FoodItem.belongsTo(Category, {
  foreignKey: 'cat_id',
});


//* Categories have many FoodItems
FoodItem.hasMany(Category, {
  foreignKey: 'cat_id',
});

// //* Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
//   as: 'productTag'
// });

// //* Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
//   as: 'productTag'
// });

module.exports = {
  Category,
  FoodItem,
};

//!========================= EOF =========================