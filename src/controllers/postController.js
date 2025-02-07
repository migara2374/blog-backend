const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content, author: req.user.userId });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: "Post creation failed" });
    }
};

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
};

exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "username");
    res.json(post);
};

exports.updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
};
