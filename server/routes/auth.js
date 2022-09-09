// const {
//   login,
//   register,
//   getAllUsers,
//   logOut,
// } = require("../controllers/userController.js");

require('dotenv').config();
const jwt = require("jsonwebtoken")

const {
  login,
  register,
  getAllUsers,
} = require("../controllers/userController.js");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
// router.post("/register", authenticateToken, register);
router.get("/allusers", authenticateToken, getAllUsers);
// router.get("/allusers/:id", getAllUsers);
// router.get("/logout/:id", logOut);

//* ~~~~ Auth MiddleWare ~~~~

function authenticateToken(req, res, next) {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  console.log("authenticateToken MiddleWare Executed!")
  console.log("Auth Header = " + authHeader)
  console.log("Token = " + token)

  if (token == null) return res.sendStatus(401)

  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user))

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user

    // Exit Middleware
    next()
  })

}


module.exports = router;