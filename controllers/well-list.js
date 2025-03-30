const WellList = require('../models/wellList')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const wells = await WellList.find()
            res.render('well-list.ejs', {wellList: wells})
        } catch (err){
            if (err) return res.status(500).send(err)
        }
    },
    createWell : async (req, res) => {
         const newWell = new WellList(
                {
                    wellName: req.body.wellName,
                    swl: req.body.swl,
                    correction: req.body.correction,
                    dateConstructed: req.body.dateConstructed
                }
            )
            try {
                await newWell.save()
                console.log('well added to database')
                res.redirect('/')
            } catch (err){
                if (err) return res.status(500).send(err)
                    res.redirect('/')
            }
        } 
}