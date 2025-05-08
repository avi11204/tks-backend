const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.model');

// Get all
router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Create
router.post('/', async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json(newEmployee);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
