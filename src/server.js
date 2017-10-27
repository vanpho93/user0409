const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/muave', (req, res) => {
    res.cookie('token', 'abcdef');
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    if(!req.cookies.token) return res.send('Ban phai mua ve');
    res.send('Moi xem phim');
});

app.listen(3000, () => console.log('Server started!'));
