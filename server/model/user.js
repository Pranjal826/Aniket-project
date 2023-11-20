// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  gender: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
