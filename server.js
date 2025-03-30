//todo - Decalre Variables
const express = require("express")
const app = express()
const mongoose = require("mongoose")



require('dotenv').config({path: "./config/.env" })//Use .env file in config folder

    //*Import functions/routes
const connectDB = require("./config/database")
const wellListRoutes = require("./routes/well-list")
const editRoutes = require("./routes/edit-well")

//Connect to Database
connectDB()

//todo - Set Middleware
app.set("view engine", "ejs") //lets our app know to set ejs as out templating language - this will be used to serve up html files for responces
app.use(express.static("public")) //lets express know that it can look into the public folder for client side css and js files
app.use(express.urlencoded({extended: true})) //makes sure we can parse post url to extract data from web forms

//todo - Set Routes
app.use('/', wellListRoutes)
app.use('/edit', editRoutes)

//todo - Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
