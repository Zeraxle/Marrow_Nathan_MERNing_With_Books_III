import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Nav from '../components/Nav'
import { getBookById } from '../services/book.service'


const UpdateForm = (props) => {

    const {submitFunction, setBooks} = props
    const {id} = useParams()
    const navigate = useNavigate()
    const [bookData, setBookData] = useState({})
    const [bookErrors, setBookErrors] = useState({})

    useEffect(() => {
        if(id){
            getBookById(id)
            .then(res => setBookData(res))
            .catch(error => console.log(error))
        }
    },[])

    const updateBookData = (e) => {
        const {name, value} = e.target
        if (name === "isAvailable"){
            let checkedValue = e.target.checked
            setBookData(prev => ({...prev, [name]: checkedValue}))
        } else {setBookData(prev => ({...prev, [name]: value})) }
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        submitFunction(bookData)
            .then(() => navigate('/'))
            .catch(error => setBookErrors(error.response.data.errors))
    }

    return(<>
        <Nav title={`Update: ${bookData.title}`}></Nav>
        <form onSubmit={submitHandler} className="book-form">
            <label>
                Title: 
                <input 
                    type="text" 
                    name="title"
                    onInput={updateBookData}
                    value={bookData.title} />
                    <p>{bookErrors.title?.message}</p>
            </label>
            <label>
                Author:  
                <input 
                    type="text" 
                    name="author"
                    onInput={updateBookData}
                    value={bookData.author}/>
                    <p>{bookErrors.author?.message}</p>
            </label>
            <label>
                Pages: 
                <input 
                    type="number"
                    name="pages"
                    onInput={updateBookData}
                    value={bookData.pages}/>
                    <p>{bookErrors.pages?.message}</p>
            </label>
            <label>
                Can this book be borrowed?
                <input 
                    type="checkbox" 
                    name="isAvailable" 
                    onChange={updateBookData}
                    value={bookData.isAvailable}
                    checked={bookData.isAvailable}
                    />
            </label>
            <input type="submit" value="Update Book" />
        </form>
    </>)
}

export default UpdateForm