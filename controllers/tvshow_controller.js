const express = require('express')
const tvshows = express.Router()
const TVshow = require('../models/tvshows.js')

// INDEX
tvshows.get('/', (req, res) => {
    res.send('This is the index at /tvshows')
})

// SHOW
tvshows.get('/:arrayIndex', (req, res) => {
    res.send(TVshow[req.params.arrayIndex])
})

module.exports = tvshows