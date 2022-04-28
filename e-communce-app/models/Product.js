const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String, 
      required: [true, 'Please provide a product Title']
    },
    price: { 
      type: Number, 
      required:[true, 'Please Provide a Product price']
    }, 
    description: {
      type: String, 
      required:[true, 'Please provide a Product Description']
    }, 
    image: {
      type: String,
    }, 
    categories: [String], 
  })

  module.exports = mongoose.model('product', productSchema)