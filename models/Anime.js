const mongoose = require('mongoose')

const AnimeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    image_url: ""
  },
  genre: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String
  },
  episodeCount: {
    type: Number
  },
  seriesLength: {
    type: Number
  }
})

module.exports = mongoose.model('Anime', AnimeSchema)