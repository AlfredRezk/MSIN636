const mongoose = require('mongoose');

const connectDB = async() => { 
  await mongoose.connect(process.env.MONGO_URL)
  console.log('Connected to DB'.yellow.underline)
}

module.exports = connectDB; 