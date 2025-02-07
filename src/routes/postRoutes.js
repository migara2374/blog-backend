const express = require("express"); 
const authMiddleware = require("../middleware/authMiddleware");
const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController"); 

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", authMiddleware, createPost);
router.put("/:id", authMiddleware, updatePost); 
router.delete("/:id", authMiddleware, deletePost); 

module.exports = router;