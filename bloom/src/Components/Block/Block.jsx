import React, { useState } from 'react'
import Popup from '../Popup/Popup'
import Stars from './Stars'
import DefaultAvatar from './images/DefaultAvatar.png'
import './block.scss'

const Block = props =>{
    const [ popup, setPopup ] = useState(false)

    const { 
        firstName,
        lastName,
        description,
        tags,
        rating,
        _id
    } = props.group

    return(
        <>
            <div key={_id} className="block" onClick={ () => setPopup(true) }>
                <div className="block-pic">
                    <img src={DefaultAvatar} alt="profile-pic"/>
                </div>
                <div className="block-info">
                    <p>{`${firstName} ${lastName}`}</p>
                    <Stars count={rating}/>
                </div>
            </div>
            <Popup isOn={popup} clicked={ () => setPopup(false) } header={`${firstName} ${lastName}`}>
                <div className="block-Popup">
                    <p>{ description }</p>
                    <ul>
                        { tags.map((tag, i) => <li key={i}>{tag}</li>) }
                    </ul>
                    <Stars count={rating}/>
                </div>
            </Popup>
        </>
    )
}

export default Block