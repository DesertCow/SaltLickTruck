
// const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');

// const typeDefs = gql`
var schema = buildSchema(`

  type Category {
    _id: ID
    category_name: String
  }

  type Food_Item {
    _id: ID
    product_name: String
    price: Int
    serving: Int
    measurement: String
    available: Boolean
    top_category: [Category]
  }

  type Query {
    categories: [Category],
    hello: String,
    partyOn: String
  }

`);


module.exports = schema;