const { Router } = require('express')
const { authorsController } = require('../controllers/authors.controller')

const router = Router()

router.post('/', authorsController.addAuthor)


module.exports = router