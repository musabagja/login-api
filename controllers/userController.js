const User = require('../models/user')
const Jwt = require('../helpers/jwt')

class UserController {
  static async Login (req, res, next) {
    try {
      const { username, password } = req.body

      if (!username) throw { name: 'NoUsername' }

      const user = await User.FindOneByUsername(username)
      
      if (!user) throw { name: 'Unregistered' }
      if (password !== user.password) throw { name: 'WrongPassword' }
      
      const access_token = Jwt.sign({
        _id: user._id,
        username: user.username
      })

      res.status(200).json({
        code: 200,
        access_token,
        message: 'Success'
      })
    } catch(err) {
      next(err)
    }
  }
}

module.exports = UserController