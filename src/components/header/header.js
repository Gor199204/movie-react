import React, { memo } from 'react';
import Navigation from '../navigation/navigation';
import "./header.css" ;


function Header () {
    console.log('Header');
    return (
        <div className="header">
            <Navigation />
        </div>
    )
}
export default memo(Header);