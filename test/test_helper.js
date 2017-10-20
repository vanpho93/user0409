require('../src/db');
const User = require('../src/user');

beforeEach('Remove all data', async() => {
    await User.remove({});
});
