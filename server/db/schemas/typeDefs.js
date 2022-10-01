
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    hello: String
    partyOn: String
  }

`;


module.exports = typeDefs;