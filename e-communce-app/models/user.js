const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    require: [true, 'Please provide a username'], 
    unique: true
  }, 
  email: {
    type: String, 
    required: [true, 'Please provide an email'], 
    unique: true
  }, 
  password: {
    type: String, 
    required:[true, 'Please provide a password']
  }
})

module.exports = mongoose.model('user', userSchema)