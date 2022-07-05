const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const asyncHandler = require('express-async-handler')
const ejsLayouts = require('express-ejs-layouts')
const color = require('colors')
const mongoDBconnect = require('./config/db')

// Dotenv Info //
dotenv.config()
const PORT = process.env.PORT

// Building Server //
const app = express()

// Body Data
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// Mongoose connect
mongoDBconnect()

// Set ejs
app.set("view engine", "ejs")
app.set("layout", "layouts/app")
app.use(ejsLayouts)

// Static Folders
app.use('/assets', express.static(path.join(__dirname, '/assets')))

// Routes
app.use('/students', require('./routes/students'))

app.listen( PORT, asyncHandler(async () => { console.log(`Server is running on port ${PORT}`.bgWhite.black); }))

