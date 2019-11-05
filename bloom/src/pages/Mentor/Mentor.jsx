import React, {useState, useEffect} from 'react';
import Popup from '../../Components/Popup/Popup';
import Axios from 'axios';

const Mentor = () => {
    const [ mentors, setMentors ] = useState([])
    const [ popup, setPopup ] = useState(false)

    useEffect(() =>{
        Axios.get('/mentor/')
            .then(res => setMentors(res.data))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <main>
            
        </main>
    ); 
};

export default Mentor;