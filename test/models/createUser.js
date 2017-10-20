const assert = require('assert');
const User = require('../../src/user');

describe('Create user', () => {
    it('Can create user with info', async () => {
        const user = new User({
            email: 'a@gmail.com',
            password: '123456',
            name: 'abcd'
        });
        await user.save();
        const u2 = await User.findOne();
        assert.equal(user.name, 'abcd');
    });

    it('Cannot create user without email', async () => {
        const user = new User({
            password: '123456',
            name: 'abcd'
        });
        try {
            await user.save()
        } catch(err) {
            assert.equal(err.name, 'ValidationError');
        }
    });
});
