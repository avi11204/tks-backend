const mongoose = require('mongoose');
require('dotenv').config(); // Must be before process.env.MONGO_URL

const TripAssignment = require('./models/TripAssignment');
const Employee = require('./models/employee.model');
const Vehicle = require('./models/vehicle.model');

async function seedData() {
  try {
    const mongoURL = process.env.MONGO_URL;
    if (!mongoURL) {
      throw new Error('❌ MONGO_URL not found in environment variables');
    }

    await mongoose.connect(mongoURL);
    // ...
    console.log('✅ Connected to MongoDB!');
    // Sample employees and vehicles
    const drivers = await Employee.find({ role: 'driver' });
    const vehicles = await Vehicle.find({});

    const assignments = [];

    for (let i = 0; i < Math.min(drivers.length, vehicles.length); i++) {
      assignments.push({
        driverId: drivers[i]._id,
        vehicleId: vehicles[i]._id,
        route: `Route ${i + 1}`,
        status: 'pending',
        startDate: new Date(),
      });
    }

    await TripAssignment.insertMany(assignments);
    console.log('✅ Trip assignments seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedData();
