const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true
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

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.pre("save", function(next) {
  if(!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};


module.exports = mongoose.model('User', UserSchema);