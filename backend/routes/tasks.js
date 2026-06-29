const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const auth = require("../middleware/authMiddleware");

// ================= GET TASKS =================
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// ================= ADD TASK =================
router.post("/", auth, async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = new Task({
      title: req.body.title,
      userId: req.user.id
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding task" });
  }
});

// ================= UPDATE / TOGGLE TASK =================
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id   // 🔐 SECURITY FIX
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // ✅ Toggle status
    task.completed = !task.completed;

    await task.save();
    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating task" });
  }
});

// ================= DELETE TASK =================
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id   // 🔐 SECURITY FIX
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting task" });
  }
});

module.exports = router;