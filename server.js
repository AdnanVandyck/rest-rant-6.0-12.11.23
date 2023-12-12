// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// PLACES
const placesController = require('./controllers/places_controller')
app.use('/places', placesController)

//HOMEPAGE
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Restaurants')
})



// 404 PAGE
app.get('*', (req, res) => {
    res.send('eorror404')
})

//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})