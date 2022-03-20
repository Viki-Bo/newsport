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
                        <a href="">All News</a>
                        <a href="">Add Post</a>
                        <a href="">Contact Us</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar