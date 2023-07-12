const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:{ 
    type: String,
    required: [true, "can't be blank"],
    match:
  }
})
mongoose.model('User', UserSchema);