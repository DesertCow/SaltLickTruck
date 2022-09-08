
// #####################################################################
// Server Application developed to support food truck ordering system
//
// Clayton Skaggs Sep 2022
// 
// ---------------------------------------------------------------------

const express = require('express')
const app = express()

const path = require('path');
require('dotenv').config();


const cors = require('cors');
const mongoose = require('mongoose')

//* ~~~ Import Routes ~~~
const authRoutes = require("./routes/auth");

// console.log('Hello World')
app.use(express.json());

//* Setup API Routes
app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

//* Share Build output directory
app.use(express.static(path.join(__dirname, '../public/build')))
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})




//* ~~~~~~~~~ MAIN APP SERVER ~~~~~~~~~
const server = app.listen(process.env.PORT || 3001, () => {
  // console.log(`Server Hosted on Port ${process.env.PORT}`)
  console.log(`| 🚀  Live API: \x1b[34mhttp://localhost:${process.env.PORT}/api\x1b[0m 🚀 |`);
})