require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db"); // Import MongoDB connection
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Simple Blog API!");
});

module.exports = app;
