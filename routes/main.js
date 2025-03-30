const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.getIndex) //read only route
// router.post('/new', homeController.createWell) //create

module.exports = router