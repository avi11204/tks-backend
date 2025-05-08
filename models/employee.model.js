const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  phone: String,
  salary: Number
});

module.exports = mongoose.model('Employee', employeeSchema);
