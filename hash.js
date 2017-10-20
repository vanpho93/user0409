const { hash, compare } = require('bcrypt');

hash('abcdef', 8)
.then(encrypted => console.log(encrypted))
.catch(err => console.log('Loi: ' + err));

compare('abcdef', '$2a$08$Q5D8IfGRGcxddYb/iJCi/umVQqSAaaozWCCuuBwYlkLfHomV.wi3S')
.then(same => console.log(same))
.catch(err => console.log('Loi: ' + err));