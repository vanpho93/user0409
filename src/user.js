const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { 
        type: String,
        unique: true, 
        trim: true, 
        required: true,
        minlength: 4
    },
    name: { 
        type: String,
        required: true,
        minlength: 4
    },
    password: { 
        type: String, 
        required: true,
        minlength: 4
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
