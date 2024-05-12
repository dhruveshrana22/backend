
const express = require('express');
const User = require('../models/User')


const app = express();

// Signup endpoint
app.post('/signup', async (req, res) => {
    const { username, email, mobile, password } = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    // Create a new user
    const newUser = new User({
        username,
        password,
        email,
        mobile
    });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Find the user by username
    const user = await User.findOne({ username });
    const email = await User.findOne({ email });
    if (!user || !email) {
        return res.status(401).json({ message: 'Invalid username or email' });
    }
    // Check if the password matches
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful' });
});


app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});