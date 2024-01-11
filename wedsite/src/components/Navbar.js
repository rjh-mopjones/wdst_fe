// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const activeState = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "#995D6A" : "",
            borderBottom: isActive ? "3px solid #62254D" : ""
        };
    };
    return (
        <div className={'topBar'}>
            <div>
                <ul className={'header'}>
                    <li>21st June 2025</li>
                    <li>Treberfydd House, Brecon, Wales</li>
                </ul>
            </div>
            <div><h1 className='title'>Rory & Ellie</h1></div>
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
