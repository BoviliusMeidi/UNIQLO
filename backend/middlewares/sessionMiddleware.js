const session = require('express-session');

const sessionMiddleware = session({
    name: 'UNIQLO',
    secret: process.env.SESSION_SECRET || 'secret_key',
    resave: true,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000,
    },
});


module.exports = {sessionMiddleware}