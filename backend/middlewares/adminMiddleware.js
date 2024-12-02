const { getUserByEmail} = require('../models/userModel');


const isAdmin = async (req, res, next) => {
    try {
      const user = req.session.user;
      if (!user) {
        return res.status(401).json({ error: 'Unauthorized. Please log in.' });
      }
      
      const dataUser = await getUserByEmail(user.email);
      if (!dataUser.is_admin) {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
      }
      
      next();
    } catch (error) {
      console.error('Error in isAdmin middleware:', error);
      res.status(500).json({ error: 'Internal Server Error.' });
    }
  };
  

  module.exports = {isAdmin}