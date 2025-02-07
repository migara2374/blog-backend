require("dotenv").config(); 
const express = require("express");
const connectDB = require("./src/config/db"); 

const authRoutes = require("./src/routes/authRoutes"); 
const postRoutes = require("./src/routes/postRoutes"); 

connectDB(); 

const app = express();
app.use(express.json()); 

app.use("./api", authRoutes);
app.use("./api", postRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));