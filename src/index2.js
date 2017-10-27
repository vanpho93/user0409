const express = require('express');
const User = require('./user');
const cookieParser = require('cookie-parser');

require('./db');
const parser = require('body-parser').urlencoded({ extended: false });

const app = express();
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './views');

const redirectIfSignedIn = (req, res, next) => {
    // todo 1
    next();
}

const requireSignedIn = (req, res, next) => {
    // todo 2
    next();
}

app.get('/dangky', redirectIfSignedIn, (req, res) => {
    res.render('dangky');
});

app.get('/dangnhap', redirectIfSignedIn, (req, res) => {
    res.render('dangnhap');
});

app.get('/user', requireSignedIn, (req, res) => {
    // todo 4
    res.render('user', { user: { name: 'Khoa', email: 'khoa@gmail.com' } });
});

app.post('/dangky', parser, (req, res) => {
    const { email, password, name } = req.body;
    User.signUp(email, password, name)
    .then(() => res.status(201).send('Dang ky thanh cong'))
    .catch((err) => res.status(401).send('Dang ky that bai. ' + err.message ));
});

app.post('/dangnhap', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(user => {
        // todo 3
        res.status(200).send('Dang nhap thanh cong');
    })
    .catch((err) => res.status(401).send('Dang nhap that bai. ' + err.message ));
});

app.listen(3000, () => console.log('Server started!'));

module.exports = app;
