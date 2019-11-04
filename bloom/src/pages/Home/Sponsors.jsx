import React from 'react'


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

    const lyft = new Sponsor(
        "Lyft",
        "https://www.nstreetvillage.org/wp-content/uploads/2016/11/lyft-logo-png-transparent-705x517.png",
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `,
        "",
        "4em"
    )

    const CMS = new Sponsor(
        "CMS",
        "https://upload.wikimedia.org/wikipedia/en/d/d5/Charmeckschoolslogo.png",
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        `,
        "",
        "8em"
    )

    // const Dress = new Sponsor(
    //     "Dress",
    //     "#",
    //     `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit
    //     `
    // )
    
    
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