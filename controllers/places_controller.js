// DEPENDENCIES
const express = require('express')
const places = express.Router()
const Place = require('../models/place')

// INDEX
places.get('/', (req, res) => {
    res.render('index', {
        places: Place,
        title: 'Index Page'
    })
    // res.send(Place)
})

// SHOW
places.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
        place: Place[req.params.arrayIndex]
    })
})

module.exports = places