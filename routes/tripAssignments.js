const express = require('express');
const TripAssignment = require('../models/TripAssignment');

const router = express.Router();

// GET all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await TripAssignment.find().populate('driverId vehicleId');
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET assignments for a specific driver
router.get('/driver/:driverId', async (req, res) => {
  try {
    const assignments = await TripAssignment.find({ driverId: req.params.driverId }).populate('vehicleId');
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new trip assignment
router.post('/', async (req, res) => {
  try {
    const newAssignment = new TripAssignment(req.body);
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update an assignment
router.put('/:id', async (req, res) => {
  try {
    const updated = await TripAssignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE an assignment
router.delete('/:id', async (req, res) => {
  try {
    await TripAssignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assignment deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
