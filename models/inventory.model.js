const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemname: String,
  quantity: Number,
  unit: String,
  location: String,
  lastupdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventory', inventorySchema);
