
// #####################################################################
// Server Application developed to support food truck ordering system
//
// Clayton Skaggs Sep 2022
// 
// ---------------------------------------------------------------------

const express = require('express')
const app = express()

const cors = require('cors');
const mongoose = require('mongoose')

const sequelize = require('./db/connection');
const seedAll = require('./db/seeds/index');

const path = require('path');
require('dotenv').config();

const router = require('express').Router();

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./db/schemas');
// const db = require('./db/connection');

// const gapp = express();


// app.use(express.json());

//* CORS Fix
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
  // Access-Control-Allow-Origin: *
};

// app.use(cors({ origin: process.env.CurrentHost }));
// app.use(cors({ origin: 'http://localhost:3001/' }));
// app.use(cors({ origin: '*' }));
app.use(cors());
app.use(express.json());

//* ~~~ Import Routes ~~~
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");

//* ALlows App to use JSON from Body of Requests
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

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

//* Open mySQL DB Connection
connectionTest();


// console.log("typeDefs")
// console.log(typeDefs)

//* Pass Apollo Config
const PORT = process.env.PORT || 3002;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//* Setup API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/menu", menuRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

//* Share Build output directory
app.use(express.static(path.join(__dirname, '../public/build')))
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})


//! ~~~~~~~~~~~~~~~ Seed SWITCH  ~~~~~~~~~~~~~~~
// seedServer();

//* ~~~~~ FUNCTIONS ~~~~~

async function connectionTest() {
  //TODO: Move to seperate File and Import method
  // console.log

  try {
    await sequelize.authenticate();
    // console.log(`\n\x1b[42m  ~~~ Remote DB Connection Valid ~~~  \x1b[0m\n`);
    console.log(`| 💡     mySQL Connection:  \x1b[32mOnline\x1b[0m     💡 |`);
  } catch (error) {
    console.error('\n\n\x1b[41mUnable to connect to the database!\x1b[0m\n\x1b[43mERROR:', error + "\x1b[0m\n\n");
  }

  //sequelize.close()
};

async function seedServer() {

  try {
    await seedAll();
    console.log('\n\x1b[42m----- SEEDING COMPLETE/VALID -----\x1b[0m\n');
  } catch (error) {
    console.log('\n\x1b[41m----- SEEDING FAILED! -----\x1b[0m\n');
    console.log(error);
  }
}

//* ~~~~~~~~~ GraphQL API SERVER ~~~~~~~~~
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  sequelize.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${gserver.graphqlPath}`);
    })
  })
};


//* ~~~~~~~~~ REST API SERVER ~~~~~~~~~
// const server = app.listen(process.env.PORT || 3001, () => {
//   // console.log(`Server Hosted on Port ${process.env.PORT}`)
//   console.log(`| 🚀  Live API: \x1b[34mhttp://localhost:${process.env.PORT}/api\x1b[0m 🚀 |`);
// })

startApolloServer(typeDefs, resolvers);