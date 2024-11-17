const db = require('../config/dbConfig');

const createUser = async (username, email, password, dob) => {
    try {
        const [user] = await db('users')
            .insert({ username, email, password, dob })
            .returning('*');
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const getUsers = async () => {
    try {
        const users = await db('users').select('*');
        return users.length > 0 ? users : null;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};


const getSessionID = async (sid) => {
    try {
        const users = await db('sessions').where({ sid }).select('*');
        return users.length > 0 ? users[0] : null;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        const users = await db('users').where({ email }).select('*');
        return users.length > 0 ? users[0] : null;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

module.exports = { createUser, getUserByEmail, getSessionID,getUsers };
