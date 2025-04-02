const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
    },
    status: {
        type: String,
        enum: ["Todo", "InProgress", "Completed"],
        default: "Todo",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Task", taskSchema);
