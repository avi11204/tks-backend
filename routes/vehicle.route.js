const express = require('express');
const router = express.Router();
const Vechicle = require('../models/vehicle.model');

// Get all
router.get('/', async (req, res) => {
  const vehicle = await Vechicle.find();
  res.json(vehicle);
});

// Create
router.post('/', async (req, res) => {
  const newVehicle = new Vechicle(req.body);
  await newVehicle.save();
  res.status(201).json(newVehicle);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Vechicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Vechicle.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
