
//* GraphQL Schema Definition
const { gql } = require("apollo-server-express");

//getSubMenu(menuID: Int): [String]

const typeDefs = gql`

  type Query {
    login(email: String!, password: String!): Auth
    getMainMenu: [String]
    getSubMenu(menuID: Int): subMenu
    getItemInfo(itemID: Int): Item
    getAllOrders: [String]
  }

  type Mutation {
    createUser(email: String!, password: String!, customerName: String!): Auth
    login(email: String!, password: String!): Auth
    updateEmail(_id: String!, email: String!): Auth
    updatePassword(_id: String!, password: String!): Auth
    checkout(items: [String],prices: [Float],qty: [Float], customerName: String): String
    updateOrderStatus(orderNumber: String, newOrderStatus: String): Order
  }

  type Item {
    id: Int
    name: String
    price: Float
    inStock: Boolean
    serving: Int
    measurement: String
    subMenuNumber: Int
  }

  type UserCreated {
    password: String
    user: User
  }

  type Order {
    _id: String
    items: String
    qty: String
    prices: String
    bill: String
    status: String
    payment: String
    customerName: String
  }

  type subMenu {
    menuList: [String]
    menuTitle: String
    menuIndex: [Int]
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
    admin: Boolean
  }

  type MainMenu {
    id: String
    category_name: String
  }

  type User {
    _id: ID
    email: String
    password: String
    loginValid: Boolean
    loginToken: String
    customerName: String
  }

`;

module.exports = typeDefs;