import React from 'react'

const Stars = props =>{
    const { count, center } = props
    const stars = []
    const star = "https://icon-icons.com/icons2/1077/PNG/32/star_77949.png"
    const noStar = "https://icon-icons.com/icons2/38/PNG/32/star_favorite_5754.png"

    const image = (star,i) => <img key={i} src={star} alt="start"/>
    for(let i = 0; i < 5; i++){
        stars.push(image(i < count ? star : noStar, i))
    }

    return(
        <div className={`stars${center && "-centered"}`}>
            {stars.map(img => img)}
        </div>
    )
}

export default Stars