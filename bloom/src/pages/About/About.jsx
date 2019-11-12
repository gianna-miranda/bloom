import React from 'react'
import './about.scss'

const About = () =>{
    const people = []
    function Person(name, about, image){
        this.name = name
        this.about = about
        this.image = image
        people.push(this)
    }
    return(
        <div id="about">
            <div className="title">
                <h1 className="title-text">About US</h1>
            </div>
            <div className="title">
                <h1 className="title-text">Founders</h1>
            </div>
            
            
        </div>
    )
}

export default About