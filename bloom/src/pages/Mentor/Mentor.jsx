import React, {useState, useEffect} from 'react';
import Filter from '../../Components/Filter/Filter'
import Block from '../../Components/Block/Block'
// import Popup from '../../Components/Popup/Popup';
import Axios from 'axios';
import './Mentor.scss'

const Mentor = () => {
    const [ mentors, setMentors ] = useState([])
    const [ filter, setFilter ] = useState({
        alphaAscend: true,
        rankAscend: true
    })

    useEffect(() =>{
        Axios.get('/mentor')
            .then(res => setMentors(res.data))
            .catch(err => console.error(err))
    }, [])

    mentors.sort((a, b) => {// filtering alphabetically
        return (`${a.firstName}${a.lastName}` > `${b.firstName}${b.lastName}`) ? 1 : -1
    })
    filter.alphaAscend || mentors.reverse()

    mentors.sort((a, b) =>{// filtering by rating
        return filter.rankAscend ? a.rating > b.rating : a.rating < b.rating
    })
    

    const filters = { //this will be an object that stores all of the functionality
        isAlphUp: () => setFilter({...filter, alphaAscend: !filter.alphaAscend}),
        isRankUp: () => setFilter({...filter, rankAscend: !filter.rankAscend})
    }

    return (
        <>
            <div className="Title">
                <h1 className="Title-text">Mentors</h1>
            </div>
            <div id="filter">
                <Filter  functions={filters} switch={filter}/>
            </div>
            <div id="mentors">
                { mentors.map(mentor => <Block key={mentor._id} group={mentor}/>) }
            </div>
        </>
    ); 
};

export default Mentor;