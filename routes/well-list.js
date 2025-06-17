const express = require('express')
const router = express.Router()
const wellListController = require('../controllers/well-list')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/', ensureAuth, wellListController.getIndex) //reads and displays well list
router.post('/new', wellListController.createWell) //creates new well


module.exports = router