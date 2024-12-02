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

const getUserByEmail = async (email) => {
    try {
        const users = await db('users').where({ email }).select('*');
        return users.length > 0 ? users[0] : null;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

const updateUser = async (userId, email, country, address, phone_number, payment_method) => {
    try {
        const updatedUser = await db('users')
            .where({ user_id: userId })
            .update({ email, country, address, phone_number, payment_method })
            .returning('*');
        return updatedUser.length > 0 ? updatedUser[0] : null;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const deletedUser = await db('users')
            .where({ user_id: userId })
            .del()
            .returning('*');
        return deletedUser.length > 0 ? deletedUser[0] : null;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

const updateProfilePicture = async (userId, imageUrl) => {
    try {
        const updatedUser = await db('users')
            .where({ user_id: userId })
            .update({ profile_picture: imageUrl })
            .returning('*');
        return updatedUser.length > 0 ? updatedUser[0] : null;
    } catch (error) {
        console.error('Error updating profile picture:', error);
        throw error;
    }
};

module.exports = { createUser, getUserByEmail, getUsers, updateUser, deleteUser, updateProfilePicture };