import React from 'react'
import AJ from './images/AJ.jpg'
import Diana from './images/Diana.jpg'
import Emily from './images/Emily.jpg'
import Giana from './images/Giana.jpg'
import Emmanuel from './images/Emmanuel.jpg'
import './about.scss'

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
    
    console.table(people)
    return(
        <section id="founders">
            <div className="title">
                <h1 className="title-text">Founders</h1>
            </div>
        </section>  
    )
}

export default Founders