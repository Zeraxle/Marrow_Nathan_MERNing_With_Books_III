import { useEffect } from "react"
import { getAllBooks } from "../services/book.service"
import { Link } from "react-router-dom"
import Nav from "../components/Nav"

const AllBooks = (props) => {
    const {books, setBooks} = props
    
    useEffect(() => {
        getAllBooks()
        .then(res => setBooks(res))
        .catch(error => console.log(error))
    }, [])
    

    return(<>
        <Nav title={`Book Catalog`}/>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Available</th>
                    <th>Book Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td className="available-space">
                                {book.isAvailable? `Yes`: `No`}
                                <p>|</p>
                                <Link to={`/book/${book._id}/update`}>Edit</Link>
                            </td>
                            <td><Link to={`/book/${book._id}/details`}>Details</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
}

export default AllBooks