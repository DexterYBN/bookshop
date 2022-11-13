const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')

const router = Router()

router.post('/', genresController.addGenre)
router.delete('/:id', genresController.delGenre)
router.get('/', genresController.getGenres)

module.exports = router