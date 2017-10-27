const jwt = require('jsonwebtoken');
const KEY = 'i2u1e812udjsacnfq2qy2';

function createToken(obj) {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, KEY, { expiresIn: '2 days' }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, KEY, (err, obj) => {
            if (err) return reject(err);
            resolve(obj);
        });
    });
}

// createToken({ name: 'Khoa Pham' })
// .then(token => console.log(token))
// .catch(err => console.log(err))

// verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2hvYSBQaGFtIiwiaWF0IjoxNTA5MTAyOTkzLCJleHAiOjE1MDkxMDMwMDh9.DptC0-ny7bqj4q4Ws9ZB2jxygQTrCvld9mxYm6yFm0U')
// .then(obj => console.log(obj))
// .catch(err => console.log(err.message));

module.exports = { createToken, verifyToken };
