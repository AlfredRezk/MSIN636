const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  title: {
    type: String, 
    required: [true, 'Please provide a post Title']
  }, 
  body: {
    type: String, 
    required:[true, 'Please provide a Post body']
  },
  creator: {
    type: String, 
    default:'Alfred Rezk'
  }, 
  createdAt: {
    type: Date, 
    default: Date.now
  }, 
  likes: Number, 
  disLikes: Number, 
  imageUrl: {
    type: String, 
    default:'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  }

})


module.exports = mongoose.model('Post', postSchema);

