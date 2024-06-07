import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import BookDetails from './views/BookDetails'
import BookForm from './views/BookForm'
import AllBooks from './views/AllBooks'
import UpdateForm from './views/UpdateForm'
import { createBook, updateBookById } from './services/book.service'



function App() {

    const [books, setBooks] = useState([])

  return (
    <>
      
      <Routes>
        <Route path='/' element={<AllBooks books={books} setBooks={setBooks}/>}/>
        <Route path='/book/create' element={<BookForm submitFunction={createBook}/>}/>
        <Route 
              path='/book/:id/update' 
              element={<UpdateForm setBooks={setBooks} submitFunction={updateBookById}/>}
              />
        <Route path='/book/:id/details' element={<BookDetails setBooks={setBooks}/>}/>
      </Routes>
    </>
  )
}

export default App
