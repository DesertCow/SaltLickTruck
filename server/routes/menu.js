
require('dotenv').config();
const jwt = require("jsonwebtoken")

// const authenticateToken = require('./utils/authWare');

// const {
//   login,
//   register,
//   getAllUsers,
// } = require("../controllers/userController.js");

const {
  getMainMenu,
} = require("../controllers/menuController.js");

const router = require("express").Router();

//* ~~~~ Open/Public Routes ~~~~
// router.post("/mainMenu", mainMenu);
// router.post("/register", register);

//* ~~~~ Auth Required Routes ~~~~
router.get("/mainMenu", authenticateToken, getMainMenu);





//* ~~~~ Auth MiddleWare ~~~~
function authenticateToken(req, res, next) {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  // console.log("authenticateToken MiddleWare Executed!")
  // console.log("Auth Header = " + authHeader)
  // console.log("Token = " + token)

  if (token == null) return res.sendStatus(401)

  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user))

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

    // console.log(err)

    if (err) return res.sendStatus(403)
    req.user = user

    // Exit Middleware
    next()
  })

}


module.exports = router;