//
//
// Boilder Plate ENV and Connection Setup

require('dotenv').config();

const { config } = require('dotenv');
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: DB_HOST,
    port: DB_HOSTPORT,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
