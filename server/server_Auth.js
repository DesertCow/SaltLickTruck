
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

//* ~~~ Import Routes ~~~
const authRoutes = require("./routes/auth");

//* CORS Config
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
  // Access-Control-Allow-Origin: *
};


//* Initialize Base Application 
const app = express()

//* Apply CORS Config
app.use(cors());

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


//* Setup API Routes
app.use("/api/auth", authRoutes);
// app.use("/api/menu", menuRoutes);
// TODO: Configre return message when any invalid route is attempted


//* Share Build output directory
app.use(express.static(path.join(__dirname, '../public/build')))
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})


//* ~~~~~ FUNCTIONS ~~~~~




//* ~~~~~~~~~ REST API SERVER ~~~~~~~~~
const server = app.listen(process.env.PORT || 3001, () => {
  // console.log(`Server Hosted on Port ${process.env.PORTAUTH}`)
  console.log(`| 🚀  Live API: \x1b[34mhttp://localhost:${process.env.PORT}/api\x1b[0m 🚀 |`);
})
