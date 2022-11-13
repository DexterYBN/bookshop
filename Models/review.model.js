const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    text: String,
    reviewAuthorName: String,
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review