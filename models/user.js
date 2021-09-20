const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection: 'users' })

const User = mongoose.model('users', userSchema);

module.exports = class UserModel {
  static FindOneByUsername = async (username) => {
    try {
      return await User.findOne({ username })
    } catch(err) {
      return { err }
    }
  }
}
