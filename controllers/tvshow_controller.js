const express = require('express')
const tvshows = express.Router()
const TvShow = require('../models/tvshow.js')

// INDEX
tvshows.get('/', (req, res) => {
    res.render('Index',
        {
            tvshows: TvShow
        }
    )
})

// SHOW
tvshows.get('/:id', (req, res) => {
    res.send(TvShow[req.params.id])
})

module.exports = tvshows