const { Place } = require('../models')

module.exports = class PlaceController {
  static path = 'places'

  static async getAll(req, res) {
    try {
      const posts = await Place.findAll()
      res.send(posts)
    } catch (error) {
      throw error
    }
  }
}
