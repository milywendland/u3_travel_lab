const mongoose = require('mongoose')
const PlaceSchema = require('./place')

const Place = mongoose.model('place', PlaceSchema)

module.exports = {
  Place
}
