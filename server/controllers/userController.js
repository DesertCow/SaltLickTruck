
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


module.exports.login = async (req, res, next) => {

  // try {

  const { username, password } = req.body;
  const user = await User.findOne({ username });

  console.log("\n\x1b[33mLogin Request\x1b[0m\n   User: \x1b[33m" + username + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m");

  if (!user) {
    console.log("\x1b[35mLogin Failed\x1b[0m");
    return res.json({ msg: "Invalid Username", status: false });
  }

  //* Validate Password
  const passValid = await bcrypt.compare(password, user.password);

  //* Invalid password, return 
  if (!passValid) {
    console.log("\x1b[35mLogin Failed\x1b[0m");
    return res.json({ msg: "Invalid Password", authenticated: false, status: false })
  }


  console.log("\x1b[32mLogin Successful\x1b[0m");
  return res.json({ msg: "Login Valid", authenticated: true })

  // } catch {
  //   res.status(500).send()
  // }




  // console.log("Login Request from " + username + " ||" + password + " ||| " + user);



};

module.exports.register = async (req, res, next) => {


  const { username, password, email } = req.body;

  console.log("\n\x1b[33mCreate New User\x1b[0m\n   User: \x1b[33m" + username + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Email: " + email);


  //* Verify email not associated with another user
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    console.log("\x1b[35mAccount Creation Failed: Email already associated with an account \x1b[0m");
    return res.json({ msg: "Email already associated with an existing account", status: false });
  }

  //* Verify userName does not already exist
  const userExists = await User.findOne({ username });
  if (userExists) {
    console.log("\x1b[35mAccount Creation Failed: User Already Exists\x1b[0m");
    return res.json({ msg: "User Name unavailable", status: false });
  }

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

