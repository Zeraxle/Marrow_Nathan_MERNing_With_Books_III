import Nav from "../components/Nav"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const BookForm = (props) => {


    const {submitFunction} = props
    const navigate = useNavigate()
    const [bookData, setBookData] = useState({
        title: ``,
        author: ``,
        pages: ``,
        isAvailable: null
    })

    const [bookErrors, setBookErrors] = useState({})


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
        <Nav title="Add a Book"/>
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
                    />
            </label>
            <input type="submit" value="Add Book" />
        </form>
    </>)
}

export default BookForm