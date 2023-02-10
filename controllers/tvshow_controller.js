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

// UPDATE
tvshows.put('/:id', (req, res) => {
    TvShow[req.params.id] = req.body
    res.redirect(`/tvshows/${req.params.id}`)
})

// DELETE
tvshows.delete('/:id', (req, res) => {
    TvShow.splice(req.params.id, 1)
    res.status(303).redirect('/tvshows')
})

// NEW
tvshows.get('/new', (req, res) => {
    res.render('new')
})

// CREATE
tvshows.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = '/images/default-image.png'
      }
    console.log(req.body);
    TvShow.push(req.body)
    res.redirect('/tvshows')
  })

// EDIT
tvshows.get('/:id/edit', (req, res) => {
    res.render('edit', {
        tvshow: TvShow[req.params.id],
        index: req.params.id
    })
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

module.exports = tvshows

