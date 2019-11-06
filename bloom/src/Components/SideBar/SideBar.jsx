import React from 'react';
import './sidebar.scss'

const SideBar = props =>{
    const { show, toggle } = props
    
    return(
        <div className={`sidebar ${show ? "active" : "inactive"}`} >
            <div className="filters">
                <div className="filters-catagory">
                    <p>Alphabetical</p>
                </div>
                <div className="filters-bttns">
                    <p>A-Z</p>
                    <p>Z-A</p>
                </div>
                <div className="filters-catagory">
                    <p>Rank</p>
                </div>
                <div className="filters-bttns">
                    <p>Least to Greatest</p>
                    <p>Greatest to Least</p>
                </div>
            </div>
            <div className="sidebar-bttn" onClick={ toggle }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default SideBar