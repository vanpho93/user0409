const mongoose = require('mongoose');
const { hash, compare } = require('bcrypt');
require('./db');

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

User.signUp = function(email, password, name) {
    return hash(password, 8)
    .then(encrypted => {
        const user = new User({ email, name, password: encrypted });
        return user.save()
    });
}

User.signIn = async function(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Email khong ton tai.');
    const same = await compare(password, user.password);
    if (!same) throw new Error('Sai password.');
};

// User.signUp('abcdef@g.com', '123456', 'Pho ABCD')

User.signIn('abcdef@g.com', '123456')
.then(() => console.log('Dang nhap thanh cong'))
.catch(err => console.log('Dang nhap that bai: ' + err.message))

module.exports = User;
