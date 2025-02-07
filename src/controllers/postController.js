const Post = require("../models/Post");

exports.createPost = async (req,res) => {
    try {
        const {title, content} = req.body; 
        const post = await Post.create({title, content, author: req.user.id });

        res.status(201).json(post); 
    } catch (error) {
        res.status(400).json({error : error.message}); 
    }
} 


exports.getPosts = async (req,res) => {
    const post = await Post.find().populate("author", "username email"); 
    if(!post) return res.status(404).json({message : "Post not found"}); 

    res.json(post); 
};


exports.updatePost = async (req,res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, res.json(post));
}


exports.deletePost = async (req,res) => {
    await Post.findByIdAndDelete(req.params.id); 
    res.json({message: "Post deleted"}); 
}