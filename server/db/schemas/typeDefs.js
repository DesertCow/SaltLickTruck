
//* GraphQL Schema Definition
const { gql } = require("apollo-server-express");


const typeDefs = gql`

  type Query {
    login(email: String!, password: String!): Auth
    getMainMenu: [String]
    getSubMenu(menuID: Int): [String]
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type UserCreated {
    password: String
    user: User
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