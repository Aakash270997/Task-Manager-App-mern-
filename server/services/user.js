const user = require("../models/user.js");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(404).json({ error: "All field are required" })
    }
    if (username.lenght < 4) {
      return res.status(404).json({ error: "Username must have 4 characters!" })
    }
    if (password.lenght < 5) {
      return res.status(404).json({ error: "Password must have 5 characters!" })
    }
    const checkUsers = await user.findOne({ $or: [{ email }, { username }] })
    if(checkUsers){
      return res.status(404).json({ error: "Username or Email exists!" })
    }else {
      const hashPass = await bcrypt.hash(password, 10)
      const newUser = new user({ username, email, password:hashPass });
      await newUser.save();
      return res.status(200).json({success: "Registration successfull"})
    }
  } catch (error) {
    return res.status(404).json({ error: "Internal server error!" });
  }
};

module.exports = { register };