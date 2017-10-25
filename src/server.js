const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'asd823e8uwuq23',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5000 },
    rolling: true
}));

app.get('/muave', (req, res) => {
    req.session.daMuaVe = true;
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    console.log(req.session.daMuaVe);
    if (!req.session.daMuaVe) return res.send('Ban phai mua ve truoc');
    res.send('Moi xem phim');
});

app.listen(3000, () => console.log('Server started!'));
