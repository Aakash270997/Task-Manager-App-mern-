const tasks = require("../models/tasks");

// Add tasks
const addTask = async (req, res) => {
  try {
    const { titile, description, priority, status } = req.body;
    const { user } = req.user;
    if (!titile || ! !description) {
      return res.status(400).json({ error: "All fileds are require." })
    }
    if (titile.length < 5) {
      return res.status(400).json({ error: "title must be 5 characters" })
    }
    if (description.length < 6) {
      return res.status(400).json({ error: "title must be 6 characters" })
    }

    const newTask = new tasks({ titile, description, priority, status });
    await newTask.save();
    user.tasks.push(newTask._id);
    await user.save();
    return res.status(200).json({ success: "Task added" });
  } catch (error) {
    return res.status(404).json({ error: "Internal server error" })
  }
}


// Edit task
const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { titile, description, priority, status } = req.body;
    // const { user } = req.user;
    if (!titile || ! !description) {
      return res.status(400).json({ error: "All fileds are require." })
    }
    if (titile.length < 5) {
      return res.status(400).json({ error: "title must be 5 characters" })
    }
    if (description.length < 6) {
      return res.status(400).json({ error: "title must be 6 characters" })
    }

    await tasks.findByIdAndUpdate(id, { titile, description, priority, status })

    const newTask = new tasks({ titile, description, priority, status });
    return res.status(200).json({ success: "Task update" });
  } catch (error) {
    return res.status(404).json({ error: "Internal server error" })
  }
}


// Gettask (just for one)
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskDetails = await tasks.findById(id);
    return res.status(200).json({ taskDetails });
  } catch (error) {
    return res.status(404).json({ error: "Internal server error" })
  }
}

// Detele tasks
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await tasks.findByIdAndDelete(id);
    return res.status(200).json({ success: "task Deleted" });
  } catch (error) {
    return res.status(404).json({ error: "Internal server error" })
  }
}


module.exports = {addTask, editTask, getTask, deleteTask}