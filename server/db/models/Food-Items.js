
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection');


class FootItems extends Model { }


FootItems.init(
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
      type: DataTypes.TINYINT(1),
      allowNull: true,
    },
    top_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = FootItems;

//!========================= EOF =========================