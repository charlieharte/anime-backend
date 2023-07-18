const User = require('../models/User')

async function createUser(req, res) {
  try {
    await new User(req.body).save()
    res.status(201).json({ 'message': 'user created' })
  } catch (error) {
    console.log('error creating user:', error)
    res.json({ 'message': 'error creating user' })
  }
}

module.exports = {createUser}