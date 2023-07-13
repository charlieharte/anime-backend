const router = require('express').Router()
const {
  getAllAnime,
  getAnimeById, 

} = require('../controllers/anime')

router.get('/', getAllAnime)

// GET /:id get bread by id
router.get('/:id', getAnimeById)
