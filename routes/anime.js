const router = require('express').Router()
const {
  getAllAnime,
  getAnimeById

} = require('../controllers/anime')

// GET / get all animes
router.get('/', getAllAnime)

// GET / get anime by id
router.get('/:id', getAnimeById)

module.exports = router