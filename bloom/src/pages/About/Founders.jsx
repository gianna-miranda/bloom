import React from 'react'
import AJ from './images/AJ.jpg'
import Diana from './images/Diana.jpg'
import Emily from './images/Emily.jpg'
import Giana from './images/Giana.jpg'
import Emmanuel from './images/Emmanuel.jpg'
import './about.scss'

const block = (name, about, image) =>(
    <div className="founder" key={name}>
        <div className="founder-img">
            <img src={image} alt={name} style={{height: "12em", width: "12em"}}/>
        </div>
        <div className="founder-name">
            <h3>{name}</h3>
        </div>
        <div className="about"> 
            <p>{about}</p>
        </div>
    </div>
)

const Founders = () =>{
    const people = []
    function Person(name, about, image){
        this.name = name
        this.about = about
        this.image = image
        people.push(this)
    }

    new Person("AJ","",AJ)
    new Person("Diana","",Diana)
    new Person("Emily","",Emily)
    new Person("Giana","",Giana)
    new Person("Emmanuel","", Emmanuel)
    return(
        <section id="founders">
            <div className="title">
                <h1 className="title-text">FOUNDERS</h1>
            </div>
            <div className="display">
                { people.map(p => block(p.name, p.about, p.image)) }
            </div>
        </section>  
    )
}

export default Founders