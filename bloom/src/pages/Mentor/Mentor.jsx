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

    const alphaAscendFunc = (which, array) =>{
        array.map(mentor => mentor.name = `${mentor.firstName}${mentor.lastName}`.toLowerCase())
        array.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            if (b.name > a.name) {
                return 1;
            }
            return 0;
        });
        return which ? array : array.reverse()
    }

    const rankAscendFunc = (which, array) =>{
        array.sort((a, b) => {
            if (a.rating > b.rating) {
                return -1
            }
            if (b.rating > a.rating) {
                return 1
            }
            return 0;
        });
        return which ? array : array.reverse()
    }

    useEffect(() =>{
        alphaAscendFunc(filter.alphaAscend, mentors)
        
    }, [filter])

    const filters = { //this will be an object that stores all of the functionality
        isAlphUp: () => setFilter({...filter, alphaAscend: !filter.alphaAscend}),
        isRankUp: () => setFilter({...filter, rankAscend: !filter.rankAscend})
    }

    return (
        <>
            <div className="Title">
                <h1 className="Title-text">Mentors</h1>
            </div>
            <Filter  functions={filters} switch={filter}/>
            <div id="mentors">
                { mentors.map(mentor => <Block key={mentor._id} group={mentor}/>) }
            </div>
        </>
    ); 
};

export default Mentor;