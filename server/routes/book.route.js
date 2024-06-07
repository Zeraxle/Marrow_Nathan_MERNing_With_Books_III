import { Router } from "express"
import { createBook, getAllBooks, getBookById, updateBookById, deleteBookById } from "../controllers/book.controller.js"

const bookRouter = Router()

    bookRouter.route('/')
        .post(createBook)
        .get(getAllBooks)

    bookRouter.route('/:id')
        .put(updateBookById)
        .get(getBookById)
        .delete(deleteBookById)

export default bookRouter