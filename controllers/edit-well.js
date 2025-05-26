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
        const wellId = req.params.id
        try {
            const result = await WellList.findByIdAndDelete(wellId)
            console.log(`Well ${result.wellName} has been deleted`)
            res.redirect('/')
        } catch (err){
            console.log(err)
        }
    },
    updateWell: async (req, res) => {
        const wellId = req.params.id
        try {
            const update = await WellList.findByIdAndUpdate(
                wellId,
                {
                    wellName: req.body.wellName,
                    swl: req.body.swl,
                    correction: req.body.correction,
                    dateConstructed: req.body.dateConstructed,
                    wellDepth: req.body.wellDepth
                }
            )
            console.log(update)
            console.log(`Well ${update.wellName} has been updated`)
            res.redirect('/well-list')
        } catch (err){
            console.log(err)
        }
    }



}