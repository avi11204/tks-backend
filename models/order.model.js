const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  clientName: String,
  item: String,
  quantity: Number,
  address: String,
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Delivered'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
