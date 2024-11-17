const bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.seed = function (knex) {
    return knex('users').del()
        .then(function () {
            return bcrypt.hash('1234', saltRounds)
                .then(function (hashedPassword) {
                    return knex('users').insert([
                        {
                            username: 'admin',
                            email: 'admin@example.com',
                            password: hashedPassword,
                            dob: '1990-01-01'
                        },
                    ]);
                });
        });
};
