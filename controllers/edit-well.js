const WellList = require('../models/wellList')

module.exports = {
    getEditWell : async (req, res) => {
        const wellId = req.params.id
        try {
            const well = await WellList.find()
            res.render('edit-well-page.ejs', {wellList: well, idWell: wellId} )
        } catch (err){
            console.log(err)
        }
    },
    deleteWell: async (req, res) => {
        
    },
    updateWell: async (req, res) => {
        
    }



}