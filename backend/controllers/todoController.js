const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, priority, taskStatus } = req.body;
    const todo = new Todo({ user: req.user._id, title, description, priority, taskStatus });
    await todo.save();
    req.user.todos.push(todo._id);
    await req.user.save();
    res.status(201).json({ message: "Todo created", todo });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  res.json({ todos });
};

exports.updateTodo = async (req, res) => {
  console.log("run update func")
  const { id } = req.params;
  const { title, description, priority, taskStatus } = req.body;
  // console.log(id, title, description,  taskStatus);
  await Todo.findByIdAndUpdate(id, { title, description, priority, taskStatus });
  res.json({ message: "Todo updated" });
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};
