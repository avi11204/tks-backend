const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  companyname: String,
  contactperson: String,
  email: String,
  address: String,
  phone: String
  
});

module.exports = mongoose.model('Clients', clientSchema);
