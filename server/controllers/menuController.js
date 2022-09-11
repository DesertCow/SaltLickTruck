
const User = require("../models/userModel")
const Category = require("../db/models/Category")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config();
const fetch = require("node-fetch");



module.exports.getMainMenu = async (req, res, next) => {

  console.log("\n\x1b[33m[API-GET] - Main Menu\x1b[0m\n");

  await Category.findAll().then(mainMenuData => res.json(mainMenuData))

};

module.exports.getSubMenu = async (req, res, next) => {

  console.log("\n\x1b[33m[API-GET] - Sub Menu #" + req.params.subMenu + "\x1b[0m\n");

  // await Category.findAll().then(mainMenuData => res.json(mainMenuData))

  Category.findOne({
    where: { id: req.params.subMenu },
  })
    .then(menuData => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'content-type');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      res.json(menuData)
    })


  // return res.json(req.params.subMenu)

};