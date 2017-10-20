const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true, trim: true },
    name: { type: String },
    password: { type: String }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
