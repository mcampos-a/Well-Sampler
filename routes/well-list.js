//*Handles initial GET request for the well list page


//*Handles POST method request for adding a new item

const express = require('express')
const router = express.Router()
const wellListController = require('../controllers/well-list')

router.get('/', wellListController.getIndex) //reads and displays well list
router.post('/new', wellListController.createWell) //creates new well

module.exports = router