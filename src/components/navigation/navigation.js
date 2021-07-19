import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import "./navigation.css" ;

function Navigation () {
    console.log('Navigation');
    return (
        <div className="nav_bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/popular">Popular</Link></li>
                <li><Link to="/upComing">Up Coming</Link></li>
                <li><Link to="/nowPlaying">Now Playing</Link></li>
                <li><Link to="/topRated">Top Rated</Link></li>


            </ul>
        </div>
    )
}
export default Navigation;