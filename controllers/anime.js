const Anime = require('../models/Anime')

async function getAllAnime(req, res) {
    try {
        const anime = await Anime.find()
        res.json(anime)
    } catch (error) {
        console.log('error fetching anime:', error)
        res.json({ 'message': 'error fetching anime' })
    }
} 

async function getAnimeById(req, res)  {
    try{
        const { id } = req.params
        const anime = await Anime.findById(id)
        res.json(anime)
    } catch (error) {
        console.log('error fetching anime by id:', error)
        res.json({ 'message': 'error fetching anime' })
    }
}

module.exports = {
    getAllAnime,
    getAnimeById
}