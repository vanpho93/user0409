const assert = require('assert');
const request = require('supertest');
const user = require('../../src/user');
const app = require('../../src/index');

describe('Test sign up route', () => {
    it('Can sign up with full info', async () => {
        const response = await request(app)
        .post('/dangky')
        .send({
            email: 'abcd@gmail.com',
            password: '1234567',
            name: 'Pho ABCD'
        })
        .type('form');
        assert.equal(response.status, 201);
        assert.equal(response.text, 'Dang ky thanh cong');
    });
});
