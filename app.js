const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());
app.use("/api", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

app.listen(process.env.PORT, () => console.log("Server running..."));
