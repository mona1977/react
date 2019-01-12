const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  c_name: {
    type: String
  },
  c_phone: {
    type: String
  },
  c_address: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);