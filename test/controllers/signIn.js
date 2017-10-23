const assert = require('assert');
const request = require('supertest');
const User = require('../../src/user');
const app = require('../../src/index');

describe('Test sign up route', () => {
    beforeEach('Create a user for test', async () => {
        await User.signUp('abcd@gmail.com', '1234567', 'Pho ABCD');
    });

    it('Can sign in with right info', async () => {
        const response = await request(app)
        .post('/dangnhap')
        .send({
            email: 'abcd@gmail.com',
            password: '1234567',
        })
        .type('form');
        assert.equal(response.status, 200);
    });
});
