const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  genre: {
    type: String,
    required: true
  },
  
  
})

module.exports = mongoose.model('Anime', animeSchema)