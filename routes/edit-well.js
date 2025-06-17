const express = require('express')
const router = express.Router()
const editWellController = require('../controllers/edit-well')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/:id', ensureAuth, editWellController.getEditWell) //get the edit well page with the well id that we want to edit
router.get('/remove/:id', ensureAuth, editWellController.deleteWell) //delete selected well
router.post('/update/:id', ensureAuth, editWellController.updateWell)//update seleceted well

module.exports = router