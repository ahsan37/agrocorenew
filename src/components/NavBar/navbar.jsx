import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
                <div className = 'navbarLogo'>
                    AgroCore
                </div>
                <div className = 'navbarButtons'>
                <a href="#ourWorkSection" className='navbarButton'>Our Work</a>
                <a href="#powerBISection" className='navbarButton'>Climate Heat Map</a>
                <a href="#calculatorSection" className='navbarButton'>Carbon Calculator</a>
                <a href="#joinUsSection" className='navbarButton'>Join Us</a>
                <a href="#learnMoreSection" className='navbarButton navbarButtonSecondary'>Learn More</a>
                </div>
        </div>
    );
}

export default NavBar;