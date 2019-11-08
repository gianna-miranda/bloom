import React from 'react';
import './filter.scss'

const SideBar = props =>{
    const { show, toggle } = props
    
    return(
        <div className="filters">
            <div className="filters-filter">
                <p>Alphabetical</p>
            </div>
            <div className="filters-filter">
                <p>Rank</p>
            </div>
        </div>
    )
}

export default SideBar