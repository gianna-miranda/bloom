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
                <a href="/Mentor"><p>Mentors</p></a>
                <a href=""><p>Networking</p></a>
                <a href=""><p>About</p></a>
            </div>
        </nav>
    )
}

export default Navbar