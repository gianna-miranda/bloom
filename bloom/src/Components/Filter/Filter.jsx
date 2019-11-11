import React from 'react';
import './filter.scss'
import { 
    FaAngleUp
} from 'react-icons/fa'

const Filter = props =>{
    const { functions } = props
    const { alphaAscend, rankAscend } = props.switch;
    const switcher = input => ( {transform: input || "rotateX(180deg)", transition: "ease 1s all"} )
    return(
        <div className="filters">
            <div className="filters-filter" onClick={ functions.isAlphUp }>
                <p>Alphabetical <FaAngleUp style={switcher(alphaAscend)}/></p>
            </div>
            <div className="filters-filter" onClick={ functions.isRankUp }>
                <p>Rank <FaAngleUp style={switcher(rankAscend)}/></p>
            </div>
        </div>
    )
}

export default Filter