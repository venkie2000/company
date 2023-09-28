//company name, website, address, description, location, gst no
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenumber: String,
  dob: String,
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
