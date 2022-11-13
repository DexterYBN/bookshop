const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')

const router = Router()

router.post('/', booksController.addBook)
router.delete('/:id', booksController.delBook)
router.patch('/:id', booksController.updateBook)
router.get('/:id', booksController.getBookById)
router.get('/', booksController.getBooks)
router.get('/genre/:id', booksController.getBooksByGenre)

module.exports = router