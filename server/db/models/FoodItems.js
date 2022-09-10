
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection');


class FoodItems extends Model { }


FoodItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    serving: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    measurement: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    top_category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      key: 'cat_id',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'fooditem',
  }
);

module.exports = FoodItems;

//!========================= EOF =========================