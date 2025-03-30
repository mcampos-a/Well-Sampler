const express = require('express')
const router = express.Router()
const editWellController = require('../controllers/edit-well')

router.get('/:id', editWellController.getEditWell) //get the edit well page with the well id that we want to edit
router.get('/remove/:id', editWellController.deleteWell) //delete selected well
router.post('/update/:id', editWellController.updateWell)//update seleceted well

module.exports = router