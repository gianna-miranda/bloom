import React, { useState } from 'react'
import Popup from '../Popup/Popup'
import './block.scss'

const Block = props =>{
    const [ popup, setPopup ] = useState(false)

    const { 
        firstName,
        lastName,
        description,
        tags
    } = props.group

    return(
        <>
            <div className="block" onClick={ () => setPopup(true) }>
                <div className="block-pic">
                    <img src="https://icon-icons.com/icons2/1997/PNG/48/account_avatar_people_profile_user_icon_123297.png" alt="profile-pic"/>
                </div>
                <div className="block-info">
                    <p>{`${firstName} ${lastName}`}</p>
                </div>
            </div>
            <Popup isOn={popup} clicked={ () => setPopup(false) } header={`${firstName} ${lastName}`}>
                <div className="block-Popup">
                    <p>{ description }</p>
                    <ul>
                        { tags.map((tag, i) => <li key={i}>{tag}</li>) }
                    </ul>
                </div>
            </Popup>
        </>
    )
}

export default Block