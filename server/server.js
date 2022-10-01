const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');
const express = require('express')
const http = require('http')

const { typeDefs, resolvers } = require('./db/schemas');

// console.log(typeDefs)
// console.log(resolvers)

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  //* ALlows App to use JSON from Body of Requests
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ApolloServerPluginLandingPageGraphQLPlayground({}),
    ]
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: 4003 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4003${server.graphqlPath}`);
}


startApolloServer(typeDefs, resolvers);