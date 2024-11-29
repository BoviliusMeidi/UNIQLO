const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = req.session.user.is_admin === false ? 'uploads/users/' : 'uploads/products/';
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});

module.exports = upload;
