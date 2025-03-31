const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth")
const mainController = require('../controllers/main')
const postsController = require("../controllers/posts")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/', mainController.getIndex) //read only route
router.get("/profile", ensureAuth, postsController.getProfile)
router.get("/feed", ensureAuth, postsController.getFeed)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/logout", authController.logout)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)
module.exports = router