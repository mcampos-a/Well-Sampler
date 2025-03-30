//Dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")//(session)
const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
//*Import functions/routes
const mainRoutes = require("./routes/main")
const wellListRoutes = require("./routes/well-list")
const editRoutes = require("./routes/edit-well")

require('dotenv').config({path: "./config/.env" })//Use .env file in config folder

// Passport config
require("./config/passport")(passport)

connectDB()//Connect to Database

//todo - Set Middleware
app.set("view engine", "ejs") //lets our app know to set ejs as out templating language - this will be used to serve up html files for responces
app.use(express.static("public")) //lets express know that it can look into the public folder for client side css and js files
app.use(express.urlencoded({extended: true})) //makes sure we can parse post url to extract data from web forms
app.use(express.json())

//Logging
app.use(logger("dev"))

//Use forms for put / delete
app.use(methodOverride("_method"))

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Use flash messages for errors, info, ect
app.use(flash())

//todo - Set Routes
app.use('/', mainRoutes)
app.use('/well-list', wellListRoutes)
app.use('/edit', editRoutes)

//todo - Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
