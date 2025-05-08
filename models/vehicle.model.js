const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehiclenumber: String,
  vehicletype: String,
  registrationnumber: String,
  capacity: Number,
 fueltype: String,
  mileage: Number,
  insurance: String,
  insuranceexpiry: Date,
  roadtax: String,
  roadtaxexpiry: Date,
  pollutioncertificate: String,
  pollutionexpiry: Date,
  permitnumber: String,
  permitexpiry: Date,
  fcexpiry: Date,
  Status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  }, 
});

module.exports = mongoose.model('Vehicle', vehicleSchema );
