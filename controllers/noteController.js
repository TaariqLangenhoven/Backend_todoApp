const express = require('express')
const Note = require('../model/note.js')

const createNote = async (req,res)=>{
    try {
        //const id = req.params.id
        const note = new Note(req.body)
        note.save()
        res.redirect('home')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createNote
}