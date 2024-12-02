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
                            profile_picture:'../../assets/stores/users/admin.png',
                            password: hashedPassword,
                            country: 'Indonesia',
                            address: 'Jakarta',
                            phone_number:'080000000000',
                            balance:'9999999999',
                            dob: new Date().toISOString().split('T')[0],
                            is_admin : true,
                        },
                        {
                            username: 'bovi',
                            email: 'bovi@example.com',
                            password: hashedPassword,
                            dob: '2005-05-23'
                        },
                    ]);
                });
        });
};
