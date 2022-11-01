
//* Models for SQL and MongoDB 
const { UserMongo, FoodItem, Category, Orders } = require('../../models');

//* SQL Connection
const sequelize = require('../sqlConnection');

//* Auth Tools
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { signToken } = require('../../utils/auth');

const { config } = require('dotenv');

const stripe = require('stripe')(process.env.STRIPE_KEY);

// stripe.products.create({
//   name: 'Starter Subscription',
//   description: '$12/Month subscription',
// }).then(product => {
//   stripe.prices.create({
//     unit_amount: 1200,
//     currency: 'usd',
//     recurring: {
//       interval: 'month',
//     },
//     product: product.id,
//   }).then(price => {
//     console.log('Success! Here is your starter subscription product id: ' + product.id);
//     console.log('Success! Here is your premium subscription price id: ' + price.id);
//   });
// });

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

      subMenuTitle = String(subMenuTitle.category_name)

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
        id: itemID,
        name: itemData.product_name,
        price: itemData.price,
        inStock: itemData.available,
        serving: itemData.serving,
        measurement: itemData.measurement,
        subMenuNumber: itemData.top_category
        // quantity: 1
      }
    },
    getAllOrders: async () => {

      console.log("\n\x1b[33m[API-GET] - Get All Orders\x1b[0m");

      //* Query Database for Main Menu
      const ordersData = await Orders.find();

      console.log(" ~~ Order Count = \x1b[31m" + ordersData.length + "  \x1b[0m~~")

      //* Parse response data to create array of Menu Items
      var orderList = []
      for (i = 0; i < ordersData.length; i++) {

        orderList[i] = ordersData[i]._id + "|" + JSON.parse(ordersData[i].items) + "|" + JSON.parse(ordersData[i].qty) + "|" + ordersData[i].status + "|" + ordersData[i].payment + "|" + ordersData[i].customerName
     
      }

      //* Return List to Client
      return orderList
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

      // console.log("Correct Password = " + correctPw)

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
    updateEmail: async (parent, { email, _id }) => {

      //TODO: Confirm new email does not already exists in DB
      //TODO: Add Try/Catch logic to print failed update to console
      console.log("\n\x1b[33mUpdate User Email (MongoDB)\x1b[0m\n\x1b[0m\n   Email: \x1b[35m" + email + "\n\x1b[0m   ID: \x1b[35m" + _id);
      
      await UserMongo.updateOne({ _id: _id }, { $set: { email: email } })

      console.log("\x1b[32m   Email Update Successful\x1b[0m\n")

    },
    updatePassword: async (parent, { password, _id }) => {

      console.log("\n\x1b[33mUpdate User Password (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\n\x1b[0m   ID: \x1b[35m" + _id + "\x1b[0m");

      const user = await UserMongo.findOne({ _id });
      const hashword = await user.generateHash(password);


      //TODO: Add Try/Catch logic to print failed update to console
      await UserMongo.updateOne({ _id: _id }, { $set: { password: hashword } })

      console.log("\x1b[32m   Password Update Successful\x1b[0m\n")

    },
    checkout: async (parent, CART) => {

      //* ------------------------------------------------------------------------------------------------
      //*                                         LOCAL CHECKOUT ZONE
      //* ------------------------------------------------------------------------------------------------
      console.log("======= Local Checkout Start ======")


      let items = JSON.stringify(CART.items)
      let qty = JSON.stringify(CART.qty)
      let prices = JSON.stringify(CART.prices)
      let bill = 0
      let status = "Submitted"
      let payment = true

      let customerName = "Zara Cottontail"

      for (let i = 0; i < CART.items.length; i++) {
        // console.log("CART Price (" + i + ")")
        // console.log(CART.prices[i])
        bill = bill + CART.prices[i] * CART.qty[i]
      }

      // console.log(items)
      // console.log(qty)
      // console.log(prices)
      // console.log(bill)

      //TODO: Add payment status in Create. When Stripe respond 200 (Unpaid -> Paid)

      const orderRes = await Orders.create({ items, qty, prices, bill, status, payment, customerName })

      // console.log("======= orderRes ======")
      // console.log(orderRes)

      orderID = String(orderRes._id)

      // console.log(orderID)

      // finalRes = "Order Received! Order ID:" + 

      return orderID

      //* ------------------------------------------------------------------------------------------------
      //*                                         STRIPE CHECKOUT ZONE
      //* ------------------------------------------------------------------------------------------------


      //TODO: Take array of Items and translate into corect format to send to Stripe for checkout
      // console.log("======= Final Cart ======")
      // console.log(finalCART)
      // finalCART = String(finalCART)
      // console.log(finalCART)
      // finalCART = JSON.stringify(finalCART)
      // console.log("======= Final 2 Cart ======")

      // let splitCart = finalCART.substring(5)
      // let parsedCART = JSON.parse(finalCART)
      // console.log(splitCart)
      // console.log(splitCart[1])
      // finalCART = JSON.parse(finalCART)
      // console.log(finalCART)
      // console.log("======= Items ======")

      // await stripe.products.create({
      //   name: 'Gold Special',
      //   price: 7.99
      // });
      // finalCART = String(finalCART)
      // finalCART = finalCART.split(":", 1)
      // console.log(finalCART[0])
      // console.log(JSON.parse(finalCart))
      // finalCART.substring(1, finalCART.length - 1)
      // finalCART = JSON.parse(finalCART)
      // console.log(JSON.stringify(finalCART))
      // console.log(parent)


      // for (let i = 0; i < items.length; i++) {
      // for (let i = 0; i < 6; i++) {

      // console.log("======= Items ======")
      // console.log(items[i]);
      // await stripe.products.create({
      //   name: '1/2 LB Pork Ribs',
      //   description: '$1/2 lbs of Pork Ribs',
      // }).then(product => {
      //   stripe.prices.create({
      //     unit_amount: 1195,
      //     currency: 'usd',
      //     product: product.id,
      //   }).then(price => {
      //     console.log('Success! Here is your starter subscription product id: ' + product.id);
      //     console.log('Success! Here is your premium subscription price id: ' + price.id);
      //   });
      // });
      // console.log(finalCart[i])

      // }

      // const productsList = await stripe.products.list({
      //   limit: 100,
      // });

      // console.log(" ================ Cart List (" + productsList.data.length + ") ================")
      // console.log("================ Product 0 ================")
      // console.log(productsList.data[0])
      // console.log("================ Product 1 ================")
      // console.log(productsList.data[1])
      // console.log("================ Product 2 ================")
      // console.log(productsList.data[2])
      // console.log("================ Product 3 ================")
      // console.log(productsList.data[3])
      // console.log("================ Product 4 ================")
      // console.log(productsList.data[4])
      // console.log("================ Product 5 ================")
      // console.log(productsList.data[5])
      // console.log("================ Product 6 ================")
      // console.log(productsList.data[6])
      // return "Party on Garth"


      // return orderRes


    }

  },

};

module.exports = resolvers;