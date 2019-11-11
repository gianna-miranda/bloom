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
        Axios.get('/Mentor')
            .then(res => setMentors(res.data))
            .catch(err => console.error(err))
    }, [])

    const isAlphUpFunc = (which) =>{
        mentors.sort((a, b) => {
            return (`${a.firstName}${a.lastName}` > `${b.firstName}${b.lastName}`) ? 1 : -1
        })
        which || mentors.reverse()
    }

    const isRankUpFunc = (which) =>{
        mentors.sort((a, b) =>{
            return which ? a.rating > b.rating : a.rating < b.rating
        })
    }

    isAlphUpFunc(filter.alphaAscend)
    isRankUpFunc(filter.rankAscend)
    

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