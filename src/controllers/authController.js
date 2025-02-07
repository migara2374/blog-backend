const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req,res) => {
    try {
        const {username, email, password} = req.body; 

        const salt = await bcrypt.genSalt(10); 

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username , 
            email ,
            password: hashedPassword
        }); 

        res.status(201).json({message : "User registered successfully", user}); 
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.login = async (req,res) => {
    try {
        const {email, password} = req.body; 

        const user = await User.findOne({email}); 
        if(!user) return res.status(400).json({message: "Invalid credentials"}); 

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.json({token, user}); 
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
};