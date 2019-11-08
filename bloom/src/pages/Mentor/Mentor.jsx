import React, {useState, useEffect} from 'react';
import SideBar from '../../Components/SideBar/SideBar'
import Block from '../../Components/Block/Block'
import { Swipeable } from 'react-swipeable'
// import Popup from '../../Components/Popup/Popup';
import Axios from 'axios';
import './Mentor.scss'

const Mentor = () => {
    const [ mentors, setMentors ] = useState([])
    const [ filter, setFilter ] = useState(false)
    const [ popup, setPopup ] = useState(false)

    useEffect(() =>{
        Axios.get('/Mentor')
            .then(res => setMentors(res.data))
            .catch(err => console.error(err))
    }, [])



    const filters = { //this will be an object that stores all of the functionality

    } 
    
    return (
        <Swipeable onSwipedRight={ () => setFilter(true) } onSwipedLeft={ () => setFilter(false) }>
            <div className="header">
                <h1 className="header-text">Mentors</h1>
            </div>
            <SideBar show={filter} toggle={ () => setFilter(!filter) }/>
            <div id="mentors">
                { mentors.map(mentor => <Block key={mentor._id} group={mentor}/>) }
            </div>
        </Swipeable>
    ); 
};

export default Mentor;