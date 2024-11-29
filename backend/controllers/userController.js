const bcrypt = require('bcryptjs');
const { createUser, getUserByEmail, getUsers, updateUser, deleteUser, updateProfilePicture } = require('../models/userModel');
require('dotenv').config();

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

        req.session.user = { id: user.user_id, email: user.email , is_admin: user.is_admin };
        res.status(200).json({ user: req.session.user, sessionID: req.sessionID});
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getUser = async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized. Please log in.' });
        }
        const dataUser = await getUserByEmail(user.email);
        res.status(201).json({ dataUser });
    } catch (error) {
        res.status(500).json({ error: "Failed to get user" });
    }
}

const listUsers = async (req, res) => {
    try {
        const listUsers = await getUsers();
        res.status(201).json({ listUsers });
    } catch (error) {
        res.status(500).json({ error: "Failed to get user" });
    }
}

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error during session destruction:', err);
            return res.status(500).json({ error: 'Failed to logout' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

const editUser = async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized. Please log in.' });
        }

        let { email, country, address, phone_number, payment_method } = req.body;

        if (email) {
            email = email.toLowerCase();
        }

        const updatedUser = await updateUser(user.id, email, country, address, phone_number, payment_method);
        res.status(200).json({ updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

const eraseUser = async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized. Please log in.' });
        }
        await deleteUser(user.id);
        req.session.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

const removeUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await deleteUser(id);
  
      if (deleted) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  };

const uploadProfilePicture = async (req, res) => {
    if (req.file) {
      const filePath = `../../backend/uploads/users/${req.file.filename}`;
      try {
        const updatedUser = await updateProfilePicture(req.session.user.id, filePath);
        if (updatedUser) {
          res.json({ image_url: filePath });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        console.error('Error saving image URL to database:', error);
        res.status(500).json({ message: 'Error saving image URL to database' });
      }
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  };

module.exports = { registerUser, loginUser, getUser, listUsers, logoutUser, editUser, eraseUser, removeUser,uploadProfilePicture };