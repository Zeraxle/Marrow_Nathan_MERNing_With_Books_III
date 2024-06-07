import Nav from "../components/Nav"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteBookById, getBookById } from "../services/book.service"

const BookDetails = (props) => {

    const {setBooks} = props
    const {id} = useParams()
    const navigate = useNavigate()
    const [bookData, setBookData] = useState({})

    useEffect(() => {
        getBookById(id)
        .then(res => setBookData(res))
        .catch(error => console.log(error))
    }, [])

    const borrowBook = () => {
        deleteBookById(id)
        setBooks(prev => prev.filter(book => id != book._id))
        navigate('/')
    }


    return(<>
        <Nav title={bookData.title}/>
        <div className="book-details">
            <p>Title: {bookData.title}</p>
            <p>Author: {bookData.author}</p>
            <p>Pages: {bookData.pages}</p>
            <p className={bookData.isAvailable? "green" : "red"}>
                {bookData.isAvailable? `Available for borrowing`: `Not Available`}
            </p>
            {
                bookData.isAvailable?            
                <button onClick={borrowBook}>Borrow</button> : null
            }
        </div>
    </>)
}

export default BookDetails