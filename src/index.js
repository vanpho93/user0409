const express = require('express');
require('./db');
const parser = require('body-parser').urlencoded({ extended: false });
const User = require('./user');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/dangky', (req, res) => res.render('dangky'));

app.post('/dangky', parser, (req, res) => {
    const user = new User(req.body);
    user.save()
    .then(() => res.send('Dang ky thanh cong'))
    .catch((err) => res.send('Dang ky that bai. ' + err.message ));
});

app.listen(3000, () => console.log('Server started!'));