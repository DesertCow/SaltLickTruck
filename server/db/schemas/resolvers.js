
//* Models for SQL and MongoDB 
const { UserMongo, FoodItem, Category } = require('../../models');

//* SQL Connection
const sequelize = require('../sqlConnection');

//* Auth Tools
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { signToken } = require('../../utils/auth');


const resolvers = {

  Query: {
    getMainMenu: async () => {

      console.log("\n\x1b[33m[API-GET] - Main Menu\x1b[0m\n");

      //* Query Database for Main Menu
      const mainMenuData = await Category.findAll();

      //* Parse response data to create array of Menu Items
      var mainMenuList = []
      for (i = 0; i < mainMenuData.length; i++) {
        mainMenuList[i] = mainMenuData[i].category_name
      }

      //* Return List to Client
      return mainMenuList
    },
    getSubMenu: async (parent, { menuID }) => {

      console.log("\n\x1b[33m[API-GET] - Sub Menu #" + menuID + "\x1b[0m\n");

      //* Query Database for Sub Menu based on "menuID" provided in request
      var subMenuData = await FoodItem.findAll({
        where: { top_category: menuID },
      })

      //* Parse response data to create array of Sub Menu Items
      const finalList = []
      const indexList = []
      for (i = 0; i < subMenuData.length; i++) {
        // console.log(mainMenuData[i].category_name)
        finalList[i] = subMenuData[i].product_name
        indexList[i] = subMenuData[i].id
      }

      var subMenuTitle = await Category.findOne({
        where: { id: menuID },
      })
      // console.log("==================== Sub menu Title ==================== ");
      // console.log(subMenuTitle.category_name)

      // var menuIndex = await FoodItem.findOne({
      //   where: { top_category: menuID },
      // })

      console.log("==================== Menu Index ==================== ");
      console.log(indexList)

      subMenuTitle = String(subMenuTitle.category_name)
      // var subMenuTitle = "Test Title"

      //* Return List to Client
      return { menuList: finalList, menuTitle: subMenuTitle, menuIndex: indexList }
    },
    getItemInfo: async (parent, { itemID }) => {

      console.log("\n\x1b[33m[API-GET] - Item Info #" + itemID + "\x1b[0m\n");
      console.log("ITEM INFO REQUEST! [" + itemID + "]")


      var itemData = await FoodItem.findOne({
        where: { id: itemID },
      })

      return {
        itemID: itemID,
        itemName: itemData.product_name,
        itemPrice: itemData.price,
        inStock: itemData.available,
        itemServing: itemData.serving,
        itemMeasurement: itemData.measurement,
        subMenuNumber: itemData.top_category
      }
    },
  },

  Mutation: {
    createUser: async (parent, { email, password }) => {

      console.log("\n\x1b[33mCreate New User (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Email: " + email);

      //* Request Database create a new "User"
      const user = await UserMongo.create({ email, password });

      //TODO: Enable way to print this when it fails...
      //console.log("\x1b[35mAccount Creation Failed: Email already associated with an account \x1b[0m");


      // console.log(user)
      //* Sign/Generate JWT Token
      const token = signToken(user);

      console.log("\x1b[32mAccount Creation Successful\x1b[0m");

      //* Return Token to User
      return { token, user };
    },
    login: async (parent, { email, password }) => {

      console.log("\n\x1b[33mLogin Request\x1b[0m\n   Email: \x1b[33m" + email + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m")

      //* Query Database for user based off provided "email"
      const user = await UserMongo.findOne({ email });

      //* Validate User Exists
      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      //* Validate Password via "isCorrectPassword" method
      const correctPw = await user.isCorrectPassword(password);

      //* Error for incorrect password
      if (!correctPw) {
        console.log("\x1b[35mLogin Failed\x1b[0m")
        throw new AuthenticationError('Incorrect password!');
      }

      console.log("\x1b[32m   Login Successful\x1b[0m\n")

      //* Return Token to User
      const token = signToken(user);
      return { token, user };
    },
  },

};

module.exports = resolvers;