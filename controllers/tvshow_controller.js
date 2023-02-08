const express = require('express')
const tvshows = express.Router()
const TvShow = require('../models/tvshow.js')

// INDEX 
tvshows.get('/', (req, res) => {
    res.render('Index',
        {
            tvshows: TvShow,
            title: 'Index Page'
        }
    )
})

// SHOW 
tvshows.get('/:id', (req, res) => {
    if (TvShow[req.params.id]) {
        res.render('Show', {
            tvshow: TvShow[req.params.id],
            index: req.params.id
        })
    } else {
        res.render('error404')
    }
})

// DELETE
tvshows.delete('/:id', (req, res) => {
    TvShow.splice(req.params.id, 1)
    res.status(303).redirect('/tvshows')
})

module.exports = tvshows

