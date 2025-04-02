const tasks = require("../models/tasks");

// Add tasks
const addTask = async (req, res) => {
  try {
    const { title, description, priority, status } = req.body;
    const { user } = req; // Ensure this comes from authentication middleware

    if (!title || !description) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (title.length < 5) {
      return res.status(400).json({ error: "Title must be at least 5 characters." });
    }
    if (description.length < 6) {
      return res.status(400).json({ error: "Description must be at least 6 characters." });
    }

    const newTask = new tasks({ title, description, priority, status });
    await newTask.save();

    if (user) {
      user.tasks.push(newTask._id);
      await user.save();
    }

    return res.status(200).json({ success: "Task added successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Edit task
const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, priority, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (title.length < 5) {
      return res.status(400).json({ error: "Title must be at least 5 characters." });
    }
    if (description.length < 6) {
      return res.status(400).json({ error: "Description must be at least 6 characters." });
    }

    const task = await tasks.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await tasks.findByIdAndUpdate(id, { title, description, priority, status });

    return res.status(200).json({ success: "Task updated successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Get task (Single task)
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskDetails = await tasks.findById(id);
    if (!taskDetails) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json({ taskDetails });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasks.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await tasks.findByIdAndDelete(id);
    return res.status(200).json({ success: "Task deleted successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addTask, editTask, getTask, deleteTask };
