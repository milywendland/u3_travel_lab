const PlaceController = require('../controllers/PlaceController')

const Router = require('express').Router()

Router.get('/', PlaceController.getAll)

module.exports = { path: PlaceController.path, Router }
