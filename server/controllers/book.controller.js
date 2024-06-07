import Book from "../models/book.model.js";

export const createBook = async(req, res, next) => {
    try {
        const BOOK = await Book.create(req.body)
        res.status(201).json(BOOK)
    }
    catch(error) {
        res.status(400).json(error)
    }
}

export const getAllBooks = async(req, res, next) => {
    try {
        const BOOKS = await Book.find()
        res.status(200).json(BOOKS)
    }
    catch(error) {
        res.status(400).json(error)
    }
}

export const getBookById = async(req, res, next) => {
    const {id} = req.params
    try {
        const BOOK = await Book.findById(id)
        res.status(200).json(BOOK)
    }
    catch(error) {
        res.status(400).json(error)
    }
}

export const updateBookById = async(req, res, next) => {
    const {id} = req.params
    const options = {
        new: true,
        runValidators: true
    }
    try {
        const UPDATED_BOOK = await Book.findByIdAndUpdate(id, req.body, options)
        res.status(200).json(UPDATED_BOOK)
    }
    catch(error) {
        res.status(400).json(error)
    }
}

export const deleteBookById = async(req, res, next) => {
    const {id} = req.params
    try{
        const BOOK = await Book.findByIdAndDelete(id)
        res.status(200).json(BOOK)
    }
    catch(error) {
        res.status(400).json(error)
    }
}





