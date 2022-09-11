
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config();



module.exports.getMainMenu = async (req, res, next) => {

  console.log("\n\x1b[33m[API-GET] - Main Menu\x1b[0m\n");

  //* Returns all users but the user that requested??
  // const mainMenuData = await User.find({ _id: { $ne: req.params.id } }).select([
  //   "email",
  //   "username",
  //   "_id",
  // ]);


  // return res.json(mainMenuData);
  return res.json("Hello WORLD!");

};