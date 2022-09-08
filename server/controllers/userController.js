
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


module.exports.login = async (req, res, next) => {

  // try {

  const { username, password } = req.body;
  const user = await User.findOne({ username });

  // if (!user) {
  //   console.log("\x1b[35mLogin Failed\x1b[0m");
  //   return res.json({ msg: "Invalid Username", status: false });
  // }

  //* Validate Password
  // const passValid = await bcrypt.compare(password, user.password);

  //* Hash Password for store
  // const hashedPassword = await bcrypt.hash(req.body.password, 10)

  // const user = await User.findOne({ username });

  console.log("\n\x1b[33mLogin Request\x1b[0m\n   User: \x1b[33m" + username + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m");
  // console.log("\n\x1b[33mLogin Request\x1b[0m\n   User: \x1b[33m" + username + "\x1b[0m\n   Hashed Password: \x1b[35m" + hashedPassword + "\x1b[0m");


  return res.json({ msg: "Login Recivied", authenticated: false, debug: "Username/Password reached the Server" })

  // } catch {
  //   res.status(500).send()
  // }




  // console.log("Login Request from " + username + " ||" + password + " ||| " + user);



};

module.exports.register = async (req, res, next) => {


  const { username, password, email } = req.body;

  console.log("\n\x1b[33mCreate New User\x1b[0m\n   User: \x1b[33m" + username + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Email: " + email);

  // //* Search Database to confirm user does not exist
  // const userExists = await User.findOne({ username })

  // if (userExists) {
  //   console.log("\x1b[35mAccount Creation Failed: User Already Exists\x1b[0m");
  //   return res.json({ msg: "User Already Exists", status: false });
  // }

  // res.status(200).send()

  //* Hash user submitted password
  const hashedPassword = await bcrypt.hash(password, 10);

  //* Create new user in database
  const user = await User.create({
    email,
    username,
    password: hashedPassword,
  });

  console.log("\x1b[32mAccount Creation Successful\x1b[0m");
  return res.json({ status: true, user });

};

