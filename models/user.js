

// ––––– ADD USERS –––––

// Add users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define properties of user
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

// Next: delete everything in route/user.js
