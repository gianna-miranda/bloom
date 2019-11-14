import React from 'react'
import Lyft from './images/lyft.png'
import cms from './images/CMS.png'


const box = (name, img, info, height, width) =>(
    <div className="box" key={name}>
        <div className="box-name">
            <img src={img} alt={name} style={{ height, width }}/>
        </div>
        <div className="box-info">
            <p>{info}</p>
        </div>
    </div>
)

const Sponsors = () =>{
    const sponsorList = []
    function Sponsor(name, img, info, height, width){
        this.name = name
        this.img = img
        this.info = info
        this.height = height
        this.width = width
        sponsorList.push(this)
    }

    new Sponsor(
        "Lyft",
        Lyft,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `,
        "",
        "4em"
    )

    new Sponsor(
        "CMS",
        cms,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `,
        "",
        "8em"
    )

    return(
        <div id="sponsors">
            <div className="header">
                <h1>Sponsors</h1>
            </div>
            <div className="container">
                {sponsorList.map(block => box(block.name, block.img, block.info, block.height, block.width))}
            </div>
        </div>
    )
}

export default Sponsors