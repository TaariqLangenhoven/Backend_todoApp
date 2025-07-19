const noteController = require('../controllers/noteController.js')
const express = require('express')
const router = express.Router()

router.post('/home', noteController.createNote)

module.exports = router