
// #####################################################################
// 
// Authorization server to support the food truck application
//
// Clayton Skaggs Sep 2022
// 
// ---------------------------------------------------------------------

const express = require('express')
const router = require('express').Router();

const cors = require('cors');
const mongoose = require('mongoose')

const path = require('path');
require('dotenv').config();

//* GraphQL
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

//* The resolvers provides a resolver function for each API endpoint
const resolvers = require('./db/schemas/resolvers');


//* ############################## DEMO CODE #######################################
//* Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    partyOn: String
  }
`);

//* #############################################################################

//* CORS Config
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
  // Access-Control-Allow-Origin: *
};

console.log("TESSSSSSSSSSSSSSSSSSSSS")
console.log(resolvers);


//* Initialize Base Application 
const app = express()

//* Apply CORS Config
app.use(cors());

//* ALlows App to use JSON from Body of Requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Share Build output directory
// app.use(express.static(path.join(__dirname, '../public/build')))
// app.get('*', (_, res) => {
//   res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

//* ~~~~~~~~~~~~~~~~~ Database Connection ~~~~~~~~~~~~~~~~~

//* Test Mongoose DB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  // console.log("DB Connection Successful!")
  console.log(`| 💡     MongooDB Connection:  \x1b[32mOnline\x1b[0m     💡 |`);

}).catch((err) => {
  console.log(err.message);
});


//* ~~~~~~~~~~~~~~~~~ GraphQL Server ~~~~~~~~~~~~~~~~~

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

// app.listen(4000);
app.listen(process.env.PORT);
console.log(`| 🚀  Live GraphQL API: \x1b[34mhttp://localhost:${process.env.PORT}/graphql\x1b[0m 🚀 |`);
// console.log('Running a GraphQL API server at http://localhost:4000/graphql');

