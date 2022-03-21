import React from 'react'
import "../styles/Navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <h1><Link to='/'>Newssport</Link></h1>
                <ul>
                    <li>
                        <Link to='/'>Top News</Link>
                        <Link to='/all'>All News</Link>
                        <Link to='/add'>Add Post</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
