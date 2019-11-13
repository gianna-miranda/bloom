import React from 'react'
import './navbar.scss'

const Navbar = () =>{
    return(
        <nav>
            <header>
                <h1>Bloom</h1>
            </header>
            <div className="pages">
                <a href="/"><p>Home</p></a>
                <a href="/mentors"><p>Mentors</p></a>
                <a href="/student"><p>Student</p></a>
                <a href="/network"><p>Networking</p></a>
                <a href="/about"><p>About</p></a>
            </div>
        </nav>
    )
}

export default Navbar