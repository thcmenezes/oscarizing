const { Router } = require('express')
const MovieController = require('../controllers/MovieController')

const router = Router()

router.get('/movies', MovieController.getMovies)
router.get('/movies/:id', MovieController.getMovie)
router.post('/movies', MovieController.addMovie)
router.put('/movies/:id', MovieController.updateMovie)
router.delete('/movies/:id', MovieController.deleteMovie)

//router.get('/movies/:id/nominations', MovieController.getNominations)

module.exports = router