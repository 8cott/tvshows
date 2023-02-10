// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
// data coming in from postman from urlencoded string
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
    res.send('TV-SHOWS 📺 !!!')
})

// TV-SHOWS
const tvshowController = require('./controllers/tvshow_controller.js')
app.use('/tvshows', tvshowController)

// 404 PAGE
app.get('*', (req, res) => {
    res.render('error404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

// NEXT LESSON: https://digitalskills.instructure.com/courses/7992/pages/code-along-be-5-restful-routes-update-and-edit?module_item_id=1054599