const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./config/db.js")
const userApis = require("./controllers/user.js")

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
app.use("/api/v1", userApis);

app.listen(process.env.PORT, ()=>{
    console.log("Server started");
});