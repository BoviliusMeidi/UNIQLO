const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const KnexSessionStore = require('./config/dbKnexSession');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    credentials: true
};

const store = new KnexSessionStore({
    table: 'sessions',
    ttl: 86400,
});


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret_key',
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000,
        sameSite: "lax",
    },
}));

app.use('/api', userRoutes);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
