const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const noteRoutes = require('./routes/noteRoutes.js')

//allows for the usage of env files
dotenv.config()

//Express app created
const app = express()

const connectToDatabase = async ()=>{
    try {
        
        await mongoose.connect(process.env.URI)
        console.log("Connected to Database")

        app.listen(process.env.PORT, ()=>{
            console.log(`Listening for requests on Port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

connectToDatabase()

//Set view engine to ejs
app.set('view engine', 'ejs')

//Middleware for logging
app.use(morgan('dev'))

//Allows for the use of static files from the public folder
app.use(express.static('public'))

//enables the reading of data from HTML form submissions.
app.use(express.urlencoded({extended:true}))

//Routes
app.get('/',(req,res)=>{res.redirect('home')})

app.get('/home',(req,res)=>{
     const note = [
        {title: "Almost finish", body:"Yeahhhh"},
        {title: "close finish", body:"BOOOOOO"}
    ]

    res.render('home', {title: "Home" , note})
})

app.get('/create',(req,res)=>{res.render('create', {title: "CREATE NOTE"})})

app.use(noteRoutes)

app.use((req,res)=>{res.render('404', {title: "404"})})