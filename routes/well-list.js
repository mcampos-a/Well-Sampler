//*Handles initial GET request for the well list page


//*Handles POST method request for adding a new item

const express = require('express')
const router = express.Router()
const wellListController = require('../controllers/well-list')

router.get('/', wellListController.getIndex) //read only route
router.post('/new', wellListController.createWell) //create

module.exports = router