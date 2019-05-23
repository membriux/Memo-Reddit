

// ––––– ADD USERS –––––

// Add users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define properties of user
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

UserSchema.pre('save', function(next) {
    let user = this;

    bcrypt.hash(user.password, 10, function (err, hash) {
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User;

// Next: delete everything in route/user.js
