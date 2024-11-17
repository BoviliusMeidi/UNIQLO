const bcrypt = require('bcryptjs');
const { createUser, getUserByEmail, getSessionID ,getUsers } = require('../models/userModel');
require('dotenv').config();

let sessionID = 0;

const registerUser = async (req, res) => {
    try {
        let { email, password, dob } = req.body;
        email = email.toLowerCase();

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const username = email.split('@')[0];
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await createUser(username, email, hashPassword, dob);
        res.status(201).json({ user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email.toLowerCase());

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        req.session.user = { id: user.id, email: user.email };
        sessionID = req.sessionID;
        console.log('Session after login:', req.session);
        console.log('Session after login:', sessionID);
        res.status(200).json({ user: req.session.user, sessionID: req.sessionID });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: 'Server error' });
    }
};


const listUsers = async (req, res) => {
    try {
        const listUsers = await getUsers();
        res.status(201).json({ listUsers });
    } catch (error) {
        res.status(500).json({ error: "Failed to get user" });
    }
}

const checkSession = async (req, res) => {
    const sessionIDfromDB = await getSessionID(sessionID);
    if (sessionIDfromDB) {
        res.status(200).json({ message: 'Session active' });
    } else {
        res.status(401).json({ error: 'Not authenticated' });
    }
};

const logoutUser = (req, res) => {
    sessionID = 0;
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to logout' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

module.exports = { registerUser, loginUser, listUsers, checkSession, logoutUser };