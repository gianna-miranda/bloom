import React from 'react'
// import Logo from './images/logo.png'
import './navbar.scss'

const Navbar = () =>{
    return(
        <nav>
            <header>
                {/* <img src={Logo} alt="Bloom Logo"/> */}
                <h1>BLOOM</h1>
            </header>
            <div className="pages">
                <a href="/"><p>Home</p></a>
                <a href="/mentors"><p>Mentors</p></a>
                <a href="/student"><p>Student</p></a>
                <a href="/about"><p>About</p></a>
            </div>
        </nav>
    )
}

export default Navbar