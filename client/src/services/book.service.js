import axios from 'axios'

const BOOK_INSTANCE = axios.create({
    baseURL: `http://localhost:8000/book`
})

export const createBook = async bookData => {
    try {
        const res = await BOOK_INSTANCE.post(`/`, bookData)
        return res.data
    } catch(error) {throw error}
}

export const getAllBooks = async () => {
    try{
        const res = await BOOK_INSTANCE.get(`/`)
        return res.data
    } catch(error) {console.log(error)}
}

export const getBookById = async id => {
    try {
        const res = await BOOK_INSTANCE.get(`/${id}`)
        return res.data
    } catch(error) {throw error}
}

export const updateBookById = async petData => {
    try {
        const res = await BOOK_INSTANCE.put(`/${petData._id}`, petData)
        return res.data
    } catch(error) {throw error}
}

export const deleteBookById = async id => {
    try {
        const res = await BOOK_INSTANCE.delete(`/${id}`)
        return res.data
    } catch(error) {throw error}
}