const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const animeRoutes = require('./routes/anime')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/animes', animeRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// async function getData() {
//     const { data } = await axios.get('') 

// insert API link above ^
// }


const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))