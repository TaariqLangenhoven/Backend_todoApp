const noteController = require('../controllers/noteController.js')
const express = require('express')
const router = express.Router()

router.get('/home', noteController.displayNotes)
router.post('/home', noteController.createNote)
router.get('/home/:id', noteController.noteDetails)
router.delete('/home/:id', noteController.deleteNote)
router.put('/home/:id', noteController.updateNote)

module.exports = router