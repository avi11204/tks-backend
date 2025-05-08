// models/TripAssignment.js
const mongoose = require('mongoose');

const tripAssignmentSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  route: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('TripAssignment', tripAssignmentSchema);
