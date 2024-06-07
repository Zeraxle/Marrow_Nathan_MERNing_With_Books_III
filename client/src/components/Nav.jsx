import { Link } from "react-router-dom"

const Nav = (props) => {

    const {title} = props
    
    return(<>
        <header className="header">
            <nav>
                <button><Link to='/'>Catalog</Link></button>
                <button><Link to='/book/create'>Add Book</Link></button>
            </nav>
            <h1>{title}</h1>
        </header>
    </>)
}

export default Nav