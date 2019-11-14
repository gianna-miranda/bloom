import React, { useState, useEffect } from 'react'
import Filter from '../../Components/Filter/Filter'
import Block from '../../Components/Block/Block'
import Axios from 'axios'
import './student.scss'



const Student = () =>{
    const [ students, setStudents ] = useState([])
    const [ filter, setFilter ] = useState({
        alphaAscend: true,
        rankAscend: true
    })

    useEffect(() =>{
        Axios.get('/student')
            .then(res => setStudents(res.data))
            .catch(() => console.log("Unable to retieve students"))
    }, [])

    students.sort((a, b) => {// filtering alphabetically
        return (`${a.firstName}${a.lastName}` > `${b.firstName}${b.lastName}`) ? 1 : -1
    })
    filter.alphaAscend || students.reverse()

    students.sort((a, b) =>{// filtering by rating
        return filter.rankAscend ? a.rating > b.rating : a.rating < b.rating
    })
    

    const filters = { //this will be an object that stores all of the functionality
        isAlphUp: () => setFilter({...filter, alphaAscend: !filter.alphaAscend}),
        isRankUp: () => setFilter({...filter, rankAscend: !filter.rankAscend})
    }

    return(
        <main>
            <div className="Title">
                <h1 className="Title-text">Students</h1>
            </div>
            <div id="filter">
                <Filter  functions={filters} switch={filter}/>
            </div>
            <div id="students">
                { students.map(student => <Block key={student._id} group={student}/>) }
            </div>
        </main>
    )
}

export default Student