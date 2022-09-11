
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

//* CORS Fix
// app.use(cors({ origin: process.env.CurrentHost }));
app.use(cors({ origin: '*' }));
app.use(express.json());

//* ~~~ Import Routes ~~~
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");

//* ALlows App to use JSON from Body of Requests
app.use(express.json());


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

//* Setup API Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

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
seedServer();

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


//* ~~~~~~~~~ MAIN APP SERVER ~~~~~~~~~
const server = app.listen(process.env.PORT || 3001, () => {
  // console.log(`Server Hosted on Port ${process.env.PORT}`)
  console.log(`| 🚀  Live API: \x1b[34mhttp://localhost:${process.env.PORT}/api\x1b[0m 🚀 |`);
})