const { Post } = require('../models')

module.exports = class PostController {
  static path = 'posts'

  static async getAll(req, res) {
    try {
      const posts = await Post.findAll()
      res.send(posts)
    } catch (error) {
      throw error
    }
  }
}
