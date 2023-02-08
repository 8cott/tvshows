const express = require('express')
const tvshows = express.Router()
const TvShow = require('../models/tvshow.js')

// INDEX PAGE
tvshows.get('/', (req, res) => {
    res.render('Index',
        {
            tvshows: TvShow,
            title: 'Index Page'
        }
    )
})

// SHOW PAGE
tvshows.get('/:id', (req, res) => {
    if (TvShow[req.params.id]) {
        res.render('Show', {
            tvshow:TvShow[req.params.id]
        })
    } else {
        res.render('error404')
    }
})

module.exports = tvshows

