const user = require("../models/user");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All field are required" })
    }
    if (username.lenght < 4) {
      return res.status(400).json({ error: "Username must have 4 characters!" })
    }
    if (password.lenght < 5) {
      return res.status(400).json({ error: "Password must have 5 characters!" })
    }
    const checkUsers = await user.findOne({ $or: [{ email }, { username }] })
    if(checkUsers){
      return res.status(400).json({ error: "Username or Email exists!" })
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All field are required" })
    }
    const checkUsers = await user.findOne({ email });
    if (checkUsers) {
      bcrypt.compare(password, checkUsers.password, (err, data)=>{
        if (data) {
          const token = jwt.sign({ id:checkUsers._id, email:checkUsers.email }, process.env.JWT_SECRET, {expiresIn:"30d"});
          console.log("user: " + token)
          res.cookie("TMAToken", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "production",
            sameSite: "None",
          });
          console.log()
          return res.status(200).json({success: "Login Success!"})
        } else {
          return res.status(400).json({ error: "Invalid Credentials"})
        }
      })
    }
  } catch (error) {
    return res.status(404).json({ error: "Internal server error!" });
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie("TMAToken", {httpOnly: true})
    res.json({ massage: "Logged out" })
  } catch (error) {
    return res.status(404).json({ error: "Internal server error!" })
  }
}

module.exports = { register, login, logout };