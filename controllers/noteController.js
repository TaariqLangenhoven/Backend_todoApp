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

const displayNotes = async (req,res)=>{
    try {
        const allNotes = await Note.find().sort({createdAt: -1})
        res.render('home', {title: "home" , allNotes})
    } catch (error) {
        console.log(error)
    }
}

const noteDetails = async (req,res)=>{
    try {
        const id = req.params.id
        console.log("THE ID IS : ", id)

        const noteData = await Note.findById(id)
        res.render('details', {title: "Details", noteData})
    } catch (error) {
        console.log(error)
    }
}

const deleteNote = async (req,res)=>{
    try {
        const id = req.params.id
        await Note.findByIdAndDelete(id)
        res.json({redirect: '/home'})
    } catch (error) {
        console.log(error)
    }
}

const updateNote = async (req,res)=>{
    try {
        const id = req.params.id
        const {updatedTitle, updatedBody} = req.body

        const result = await Note.findByIdAndUpdate(
            id, 
            {title: updatedTitle, body: updatedBody },
            {new: true}
            )
        console.log("FRONT END CONTENT: ", updatedTitle)
        res.json({redirect: '/home'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createNote,
    displayNotes,
    noteDetails,
    deleteNote,
    updateNote
}