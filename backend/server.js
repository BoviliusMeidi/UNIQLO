const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Middleware
const { sessionMiddleware } = require('./middlewares/sessionMiddleware');
const { isAdmin } = require('./middlewares/adminMiddleware');

// Routes
const sessionRoutes = require('./routes/sessionRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    credentials: true
};

app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(sessionMiddleware);

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', sessionRoutes);
app.use('/api/admin', isAdmin, adminRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});