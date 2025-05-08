
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
const userRoutes = require('./routes/user.route');
app.use('/api/users', userRoutes);


const tripAssignmentRoutes = require('./routes/tripAssignments');
app.use('/api/trip-assignments', tripAssignmentRoutes);

// Login route (basic)
app.post('/api/login', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = await mongoose.model('User').findOne({
      username,
      password,
      role: { $regex: new RegExp(`^${role}$`, 'i') } // case-insensitive match
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({ success: true, role: user.role });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
const employeeRoutes = require('./routes/employee.route');
app.use('/api/employees', employeeRoutes);

const clientsRoutes = require('./routes/clients.route');
app.use('/api/clients',clientsRoutes);


const vehicleRoutes = require('./routes/vehicle.route');
app.use('/api/vehicles',vehicleRoutes);

const inventoryRoutes = require('./routes/inventory.route');
app.use('/api/inventory', inventoryRoutes);

const orderRoutes = require('./routes/order.route');
app.use('/api/orders', orderRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
