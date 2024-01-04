// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className={'topBar'}>
            <div><h1 className='title'>Mop & Ellie</h1></div>
        <nav>
            <ul>
                <li className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
                    <Link to="/">Home</Link>
                </li>
                <li className={activeItem === 'itinerary' ? 'active' : ''} onClick={() => handleItemClick('itinerary')}>
                    <Link to="/itinerary">Itinerary</Link>
                </li>
                <li className={activeItem === 'directions' ? 'active' : ''}
                    onClick={() => handleItemClick('directions')}>
                    <Link to="/directions">Directions</Link>
                </li>
                <li className={activeItem === 'accommodation' ? 'active' : ''}
                    onClick={() => handleItemClick('accommodation')}>
                    <Link to="/accommodation">Accommodation</Link>
                </li>
                <li className={activeItem === 'registry' ? 'active' : ''}
                    onClick={() => handleItemClick('registry')}>
                    <Link to="/registry">Registry</Link>
                </li>
                <li className={activeItem === 'faqs' ? 'active' : ''} onClick={() => handleItemClick('faqs')}>
                    <Link to="/faqs">FAQs</Link>
                </li>
                <li className={activeItem === 'rsvp' ? 'active' : ''} onClick={() => handleItemClick('rsvp')}>
                    <Link to="/rsvp">RSVP</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;
