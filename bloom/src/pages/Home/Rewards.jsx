import React from 'react'

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

    const tickets = new Reward(
        "Tickets", 
        "https://icon-icons.com/icons2/1633/PNG/72/52721admissiontickets_109380.png", 
        "You can get free tickets to sporting events, movies, etc.",
        "",
        "3em"
    )

    const money = new Reward(
        "Money",
        "https://icon-icons.com/icons2/650/PNG/72/Banking_00003_A_icon-icons.com_59828.png",
        "You can recieve real cash",
        "3em",
        ""
    )

    const giftCards = new Reward(
        "Gift Card",
        "https://icon-icons.com/icons2/1577/PNG/72/3615756-card-coupon-discount-gift-label-offer-voucher_107904.png",
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