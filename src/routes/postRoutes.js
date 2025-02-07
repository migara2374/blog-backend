const express = require("express"); 
const authMiddleware = require("../middleware/authMiddleware");
const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController"); 

const router = express.Router();

router.get("./posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", authMiddleware, createPost);
router.put("/posts/:id", authMiddleware, updatePost); 
router.delete("/posts/:id", authMiddleware, deletePost); 

module.exports = router;