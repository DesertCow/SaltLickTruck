// #####################################################################
// 
// Authorization server to support the food truck application
//
// Clayton Skaggs Sep 2022
// 
// ---------------------------------------------------------------------

// const express = require('express')
// // const router = require('express').Router();

// // const cors = require('cors');
// const mongoose = require('mongoose')

// const path = require('path');
// require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./db/schemas');
const db = require('./db/connection');

// //* GraphQL
// var { graphqlHTTP } = require('express-graphql');
// var { buildSchema } = require('graphql');

// //* Apollo Express
// const { ApolloServer } = require('apollo-server-express');
// const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')
// const http = require('http')

// //* The resolvers provides a resolver function for each API endpoint
// const resolvers = require('./db/schemas/resolvers');
// const typeDefs = require('./db/schemas/typeDefs');


// //* Create New Apollo Server
// const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache: 'bounded',
//   plugins: [
//     ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//   ],
// });

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// // console.log(typeDefs);
// // console.log(resolvers);


// //* CORS Config
// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200
//   // Access-Control-Allow-Origin: *
// };

// //* Initialize Base Application 
// const app = express()

// //* Apply CORS Config
// // app.use(cors());

// //* ALlows App to use JSON from Body of Requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// //* Share Build output directory
// // app.use(express.static(path.join(__dirname, '../public/build')))
// // app.get('*', (_, res) => {
// //   res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
// //     if (err) {
// //       res.status(500).send(err)
// //     }
// //   })
// // })

// //* ~~~~~~~~~~~~~~~~~ Apollo Express Server ~~~~~~~~~~~~~~~~~

// const startApolloServer = async (typeDefs, resolvers) => {

//   //* Start GraphQL Server
//   await server.start();
//   server.applyMiddleware({ app });

//   //* ~~~~~~~~~~~~~~~~~ Database Connection ~~~~~~~~~~~~~~~~~

//   //* Test Mongoose DB Connection
//   mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//     // console.log("DB Connection Successful!")
//     console.log(`| 💡     MongooDB Connection:  \x1b[32mOnline\x1b[0m     💡 |`);

//     app.listen(PORT, () => {
//       //     console.log(`API server running on port ${PORT}!`);
//       //     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//       console.log(`| 🚀  Live GraphQL API: \x1b[34mhttp://localhost:${PORT}${server.graphqlPath}\x1b[0m 🚀 |`);
//     })

//   }).catch((err) => {
//     console.log(err.message);
//   });

//   // db.once('open', () => {
//   //   app.listen(PORT, () => {
//   //     console.log(`API server running on port ${PORT}!`);
//   //     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   //   })
//   // })
// };

// // async function startApolloServer(typeDefs, resolvers) {

// //   const httpServer = http.createServer(app);

// //   const server = new ApolloServer({
// //     typeDefs,
// //     resolvers,
// //     csrfPrevention: true,
// //     cache: 'bounded',
// //     plugins: [
// //       ApolloServerPluginDrainHttpServer({ httpServer }),
// //       ApolloServerPluginLandingPageLocalDefault({ embed: true }),
// //     ],
// //   });

// //   await server.start();
// //   server.applyMiddleware({ app });

// //   await new Promise(resolve => httpServer.listen(process.env.PORT, resolve));
// //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// //   console.log(`| 🚀  Live GraphQL API: \x1b[34mhttp://localhost:${process.env.PORT}${server.graphqlPath}\x1b[0m 🚀 |`);
// // }

// //* ~~~~~~~~~~~~~~~~~ GraphQL Server ~~~~~~~~~~~~~~~~~

// startApolloServer(typeDefs, resolvers);


// // app.use('/graphql', graphqlHTTP({
// //   schema: typeDefs,
// //   rootValue: resolvers,
// //   graphiql: true,
// // }));

// // app.listen(4000);
// // app.listen(process.env.PORT);
// // console.log(`| 🚀  Live GraphQL API: \x1b[34mhttp://localhost:${process.env.PORT}/graphql\x1b[0m 🚀 |`);
// // console.log('Running a GraphQL API server at http://localhost:4000/graphql');


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);



