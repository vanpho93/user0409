const express = require('express');
const session = require('express-session');
const User = require('./user');

require('./db');
const parser = require('body-parser').urlencoded({ extended: false });

const app = express();

app.use(session({
    secret: 'asd823e8uwuq23',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5000 },
    rolling: true
}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/dangky', (req, res) => res.render('dangky'));
app.get('/dangnhap', (req, res) => res.render('dangnhap'));

app.get('/user', (req, res) => {
    const { user } = req.session;
    if(!user) return res.redirect('/dangnhap');
    res.render('user', { user });
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
        req.session.user = { email, name: user.name };
        res.status(200).send('Dang nhap thanh cong');
    })
    .catch((err) => res.status(401).send('Dang nhap that bai. ' + err.message ));
});

app.listen(3000, () => console.log('Server started!'));

module.exports = app;
