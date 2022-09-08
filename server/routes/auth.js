// const {
//   login,
//   register,
//   getAllUsers,
//   logOut,
// } = require("../controllers/userController.js");

const {
  login,
  register,
} = require("../controllers/userController.js");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
// router.get("/allusers/:id", getAllUsers);
// router.get("/logout/:id", logOut);

module.exports = router;