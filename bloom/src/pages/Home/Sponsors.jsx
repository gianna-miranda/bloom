import React from 'react'
import { link } from 'fs';

const box = (name, info) =>(
    <div className="box" key={name}>
        <div className="box-name">
            <h3>{name}</h3>
        </div>
        <div className="box-info">
            <p>{info}</p>
        </div>
    </div>
)

const Sponsors = () =>{
    const sponsorList = []
    function Sponsor(name, info){
        this.name = name
        this.info = info
        sponsorList.push(this)
    }

    const lyft = new Sponsor(
        "Lyft",
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `
    )

    const CMS = new Sponsor(
        "CMS",
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `
    )

    const Dress = new Sponsor(
        "Dress",
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `
    )
    
    
    return(
        <div id="sponsors">
            <h1>sponsors</h1>
            <div className="container">
                {sponsorList.map(block => box(block.name, block.info))}
            </div>
        </div>
    )
}

export default Sponsors