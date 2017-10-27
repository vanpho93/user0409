const assert = require('assert');
const jwt = require('jsonwebtoken');
const KEY = 'i1g81ewus12jw812uwu18f2';

describe.only('Use jwt', () => {
    xit('Create token', () => {
        jwt.sign({ email:'vanpho01@gmail.com' }, KEY, (err, token) => {
            console.log(token);
        });
    });

    it('Verify token', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnBobzAxQGdtYWlsLmNvbSIsImlhdCI6MTUwOTEwMTIwOX0.yGhYpidsUZRb-R8g3jf9-2MOUZxDPCGsPJnhXtV0H1c';
        jwt.verify(token, KEY, (err, obj) => {
            if (err) return console.log(err);
            console.log(obj);
        });
    });
});

/*

// vanpho01@gmail.com + maHoaXyz
// id

*/

