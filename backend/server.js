const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("Environment variables loaded");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
  console.log("❌ DB Error:", err.message);
  process.exit(1);
});

// Routes
app.use("/api/auth", require("./routes/auth.js"));   // FIXED
app.use("/api/tasks", require("./routes/tasks.js"));

// Test Route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("API Running Successfully 🚀");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend")));

