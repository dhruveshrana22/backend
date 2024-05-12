// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    mobile: Number
}, { collection: 'user' });

module.exports = mongoose.model('User', UserSchema);
