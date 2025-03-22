const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello this is server side")
})

app.listen(1000, ()=>{
    console.log("Server started");
});