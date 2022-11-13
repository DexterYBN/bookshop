const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    bookName: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'author'
    },
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'genre'
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book