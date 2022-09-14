const { Router } = require('express')
const NominationController = require('../controllers/NominationController')

const router = Router()

router.get('/nominations', NominationController.getNominations)
//router.get('/nominations/:id', NominationController.getNomination)
router.post('/nominations', NominationController.addNomination)
router.put('/nominations/:id', NominationController.updateNomination)
router.delete('/nominations/:id', NominationController.deleteNomination)

module.exports = router