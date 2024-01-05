// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const activeState = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "rgb(69 26 3)" : "",
            fontWeight: isActive ? "bold" : ""
        };
    };
    return (
        <div className={'topBar'}>
            <div><h1 className='title'>Mop & Ellie</h1></div>
        <nav className={'navb'}>
            <ul>
                <li> <NavLink to='/' style={activeState}>Home</NavLink></li>
                <li><NavLink to='/itinerary' style={activeState}>Itinerary</NavLink></li>
                <li><NavLink to='/directions' style={activeState}>Directions</NavLink></li>
                <li><NavLink to='/accommodation' style={activeState}>Accommodation</NavLink></li>
                <li><NavLink to='/registry' style={activeState}>Registry</NavLink></li>
                <li><NavLink to='/faqs' style={activeState}>FAQs</NavLink></li>
                <li><NavLink to='/rsvp' style={activeState}>RSVP</NavLink></li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;
