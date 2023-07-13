const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, "can't be blank"],
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: Email,
    required: true
  },
  profile: {
    firstName: String,
    lastName: String,
    bio: String
  },
  active: {
    type: Boolean,
    default: true
  }
})

mongoose.model('User', UserSchema);