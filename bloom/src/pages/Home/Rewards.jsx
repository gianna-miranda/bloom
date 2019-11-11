import React from 'react'
import Ticket from './images/ticket.png'
import Money from './images/money.png'
import GiftCard from './images/giftcard.png'

const box = (name, img, info, height, width) =>(
    <div className="box" key={name}>
        <div className="box-name">
            <img src={img} alt={name} style={{ height, width }}/>
            <h3>{name}</h3>
        </div>
        <div className="box-info">
            <p>{info}</p>
        </div>
    </div>
)

const Rewards = () =>{
    const rewardsList = []
    function Reward(name, img, info, height, width){
        this.name = name
        this.img = img
        this.info = info
        this.height = height
        this.width = width
        rewardsList.push(this)
    }

    new Reward(
        "Tickets", 
        Ticket, 
        "You can get free tickets to sporting events, movies, etc.",
        "",
        "3em"
    )

    new Reward(
        "Money",
        Money,
        "You can recieve real cash",
        "3em",
        ""
    )

    new Reward(
        "Gift Card",
        GiftCard,
        "Recieve gift cards to place like Dominoes and Star Bucks",
        "3em",
        ""
    )
    
    return(
        <div id="rewards">
            <div className="header">
                <h1>Rewards</h1>
                <p>All rewards are recieved based on a point system</p>
            </div>
            <div className="container">
                { rewardsList.map(r => box(r.name, r.img, r.info, r.height, r.width)) }
            </div>
        </div>
    )
}

export default Rewards