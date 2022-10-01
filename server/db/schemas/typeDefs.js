
//* GraphQL Schema Definition
const { gql } = require("apollo-server-express");


const typeDefs = gql`

  type Query {
    login(email: String!, password: String!): String
    getMainMenu: MainMenu
    getSubMenu(menuID: Int): [String]
  }

  type Mutation {

    createUser(email: String!, password: String!): UserCreated
  }

  type UserCreated {
    password: String
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