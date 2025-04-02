const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
