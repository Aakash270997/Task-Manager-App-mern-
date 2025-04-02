const express = require("express");
const { createTodo, getTodos, updateTodo, deleteTodo } = require("../controllers/todoController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, createTodo);
router.get("/all", authMiddleware, getTodos);
router.put("/update/:id", authMiddleware, updateTodo);
router.delete("/delete/:id", authMiddleware, deleteTodo);

module.exports = router;
