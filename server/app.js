const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./config/db.js")
const userApis = require("./controllers/user.js")
const taskApis = require("./controllers/task.js")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials:true
}));
app.use(cookieParser());

app.get("/", (req, res)=>{
    res.send("Hello this is server side")
})

// api's
// User apis
app.use("/api/v1", userApis);
// tasks api
app.use("/api/v1", taskApis);

app.listen(process.env.PORT, ()=>{
    console.log("Server started");
});