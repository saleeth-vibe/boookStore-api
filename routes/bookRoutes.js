const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.json({message: 'Welcome to the Bookstore API', books});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Server error'});
    }
});

router.get('/:bookId', async (req, res) => {
    console.log(req.params.bookId);
    try {
        const book = await Book.findById(req.params.bookId);
        return res.json({message: 'Retrieving book information', book});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Server error'});
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const book = await Book.create(req.body);
        return res.json({message: 'Creating a new book', book});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Server error'});
    }
});


router.put('/:bookId', async(req, res) => {
    console.log(req.params.bookId);

    try {
        const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
        return res.json({message: 'Updating book information', book});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Server error'});
    }
});

router.delete('/:bookId', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.bookId);
        return res.json({message: 'Deleting a book', book});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Server error'});
    }
});

module.exports = router;