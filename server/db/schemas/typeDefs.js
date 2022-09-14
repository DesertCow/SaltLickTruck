const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    hello: String
    partyOn: String
  }

`;

// const typeDefs = gql`
//   type Category {
//     _id: ID
//     category_name: String
//   }

//   type Food_Item {
//     _id: ID
//     product_name: String
//     price: Int
//     serving: Int
//     measurement: String
//     available: Boolean
//     top_category: [Category]
//   }

//   type Query {
//     categories: [Category]
//     hello: String
//     partyOn: String
//   }

// `;


module.exports = typeDefs;