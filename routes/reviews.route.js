const { Router } = require('express')
const { reviewsController } = require('../controllers/reviews.controller')

const router = Router()

router.post('/book/:id', reviewsController.addRewiew)
router.delete('/', reviewsController.delRewiew)
router.get('/book/:id', reviewsController.getRewiews)

module.exports = router