const PostController = require('../controllers/PostController')

const Router = require('express').Router()

Router.get('/', PostController.getAll)

module.exports = { path: PostController.path, Router }
