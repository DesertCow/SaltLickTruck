const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db/sqlConnection');


class FoodItem extends Model { }


FoodItem.init(
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
      type: DataTypes.DECIMAL(4, 2),
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

module.exports = FoodItem;

//!========================= EOF =========================