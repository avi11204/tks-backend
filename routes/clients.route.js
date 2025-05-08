const express = require('express');
const router = express.Router();
const Clients = require('../models/clients.model');

// Get all
router.get('/', async (req, res) => {
  const clients = await Clients.find();
  res.json(clients);
});

// Create
router.post('/', async (req, res) => {
  const newclient = new Clients(req.body);
  await newclient.save();
  res.status(201).json(newclient);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Clients.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Clients.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
