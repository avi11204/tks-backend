const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory.model');

// Get all items
router.get('/', async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
});

// Add new item
router.post('/', async (req, res) => {
  const item = new Inventory(req.body);
  await item.save();
  res.status(201).json(item);
});

// Update item
router.put('/:id', async (req, res) => {
  const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete item
router.delete('/:id', async (req, res) => {
  await Inventory.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
