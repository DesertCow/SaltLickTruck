
//* GraphQL Schema Definition
const { gql } = require("apollo-server-express");

//getSubMenu(menuID: Int): [String]

const typeDefs = gql`

  type Query {
    login(email: String!, password: String!): Auth
    getMainMenu: [String]
    getSubMenu(menuID: Int): subMenu
    getItemInfo(itemID: Int): Item
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Item {
    itemID: Int
    itemName: String
    itemPrice: Float
    inStock: Boolean
    itemServing: Int
    itemMeasurement: String
    subMenuNumber: Int
  }

  type UserCreated {
    password: String
    user: User
  }

  type subMenu {
    menuList: [String]
    menuTitle: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
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
  }

`;

module.exports = typeDefs;