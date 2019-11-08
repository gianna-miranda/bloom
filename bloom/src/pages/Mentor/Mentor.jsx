import React, {useState, useEffect} from 'react';
import Filter from '../../Components/Filter/Filter'
import Block from '../../Components/Block/Block'
import { Swipeable } from 'react-swipeable'
// import Popup from '../../Components/Popup/Popup';
import Axios from 'axios';
import './Mentor.scss'

const Mentor = () => {
    const [ mentors, setMentors ] = useState([])
    const [ filter, setFilter ] = useState({
        alphaAscend: true,
        rankAscend: true
    })
    const [ popup, setPopup ] = useState(false)

    useEffect(() =>{
        Axios.get('/Mentor')
            .then(res => setMentors(res.data))
            .catch(err => console.error(err))
    }, [])



    const filters = { //this will be an object that stores all of the functionality

    } 
    
    return (
        <>
            <div className="header">
                <h1 className="header-text">Mentors</h1>
            </div>
            <Filter  filter={filters}/>
            <div id="mentors">
                { mentors.map(mentor => <Block key={mentor._id} group={mentor}/>) }
            </div>
        </>
    ); 
};

export default Mentor;