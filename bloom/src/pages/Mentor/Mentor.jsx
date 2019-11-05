import React, {useState} from 'react';
import Popup from '../../Components/Popup/Popup';
const Mentor = () => {
    const [ popup, setPopup ] = useState(false)
    return (
        <main>
            <h1> Mentor Information:</h1>
            <div>
                <p>First Name:</p>
                <p>Emily</p>
                {/* <p> {props.firstName}</p> */}
            </div>

            <div>
                <p>Last Name:</p>
                {/* <p> {props.lastName} </p> */}
            </div>
            
            <div>
                <p>Rating:</p>
                {/* <p> {props.lastName} </p> */}

            </div>

            <div>
                <p>Email:</p>
                {/* <p> {props.lastName} </p> */}
            </div>

            <div>
                <p>Phone Number:</p>
                {/* <p> {props.lastName} </p> */}
            </div>

            <div>
                <p>Description:</p>
                {/* <p> {props.lastName} </p> */}
            </div>
            <Popup isOn={true}>
            <div>
                <p>Description:</p>
                {/* <p> {props.lastName} </p> */}
            </div>
            </Popup>
            
        </main>
    ); 
};

export default Mentor;