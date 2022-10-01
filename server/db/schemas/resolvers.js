
//* Models for SQL and MongoDB 
const { UserMongo, FoodItem, Category } = require('../../models');

//* SQL Connection
const sequelize = require('../sqlConnection');

//* Auth Tools
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const resolvers = {

  Query: {
    login: async (parent, { email, password }) => {

      console.log("\n\x1b[33mLogin Request\x1b[0m\n   User: \x1b[33m" + email + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m")

      //* Get User based on provided Email
      const user = await UserMongo.findOne({ "email": email });

      // TODO: Logic to repsond if Email does not exists

      // console.log("Stored Password: " + user.password)

      //* Validate Password
      const passValid = await bcrypt.compare(password, user.password)

      //* Invalid password, return 
      if (!passValid) {
        console.log("\x1b[35mLogin Failed\x1b[0m")
        // return res.json({ msg: "Invalid Password", authenticated: false, status: false })
        return 'Password Invalid -> ACCESS DENIED!'
      }
      else {

        console.log("\x1b[32m   Login Successful\x1b[0m\n")

        //* ~~~~ JWT ~~~~
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)

        //* Return generated JWT token to user for use in future graphQL requests
        console.log("JWT Token Generated!\n \x1b[31m" + accessToken + "\x1b[0m\n")
        return accessToken
      }
    },
    getMainMenu: async () => {

      console.log("\n\x1b[33m[API-GET] - Main Menu\x1b[0m\n");

      //TODO: Make Call to get full menu from SQL DB 
      const mainMenuData = await Category.findAll();

      // await Category.findAll().then(mainMenuData => mainMenuData.json(mainMenuData))

      console.log("Temp = ")
      // console.log(json(mainMenuData))
      console.log(...mainMenuData)

      return mainMenuData


      //TODO: Return full menu to client

    },
    getSubMenu: async (parent, { menuID }) => {

      console.log("\n\x1b[33m[API-GET] - Sub Menu #" + menuID + "\x1b[0m\n");

      subMenuData = await FoodItem.findAll({
        where: { top_category: menuID },
      })

      console.log("================ Sub Menu Data ================ ")
      console.log(...subMenuData)



    },
  },

  Mutation: {
    createUser: async (parent, { email, password }) => {

      console.log("\n\x1b[33mCreate New User (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Email: " + email);

      // * Confirm Email does not already Exist
      const emailExists = await UserMongo.findOne({ "email": email });
      if (emailExists !== null) {
        console.log("\x1b[35mAccount Creation Failed: Email already associated with an account \x1b[0m");
        return { emailExists }
      }
      else {
        //* Hash user submitted password
        password = await bcrypt.hash(password, 10);

        //* Create New User
        const user = await UserMongo.create({ email, password });

        console.log("\x1b[32mAccount Creation Successful\x1b[0m");
        return { password, user };
      }

    },
  },

};

module.exports = resolvers;