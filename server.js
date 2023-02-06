// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('TV-SHOWS 📺 !!!')
})

// TV-SHOWS
const tvshowController = require('./controllers/tvshow_controller.js')
app.use('/tvshows', tvshowController)

// TEST-icle ROUTE!
app.get('/testicles', (req, res) => {
    res.send('HEY! LICK 👅 MY BALLS!!!')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})