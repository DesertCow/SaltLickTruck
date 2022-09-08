



module.exports.login = async (req, res, next) => {

  const { username, password } = req.body;
  // const user = await User.findOne({ username });

  // console.log("Login Request from " + username + " ||" + password + " ||| " + user);

  console.log("\n\x1b[33mLogin Request\x1b[0m\n   User: \x1b[33m" + username + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m");



  return res.json({ msg: "Login Recivied", authenticated: false, debug: "Username/Password reached the Server" })

};

