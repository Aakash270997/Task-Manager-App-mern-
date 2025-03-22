const router =  require("express").Router();
const { register } = require("../services/user.js");

router.post("/register", register);

module.exports = router;