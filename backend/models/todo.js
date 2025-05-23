const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  priority: { 
    type: String, 
    enum: ["low", "medium", "high"],  // ✅ Add priority field
    default: "low" 
  },
  taskStatus: {   // ✅ Changed from `status` to `taskStatus`
    type: String,
    enum: ["Todo", "InProgress", "Completed"],
    default: "Todo",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
