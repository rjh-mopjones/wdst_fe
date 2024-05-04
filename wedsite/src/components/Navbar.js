// Navbar.js

import React, {useRef} from 'react';
import {Burger, Drawer} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import burgClasses from '../styles/Burg.module.css';
import drawClasses from '../styles/Draw.module.css';
import {NavLink} from "react-router-dom";
const { useState, useEffect } = React;

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function getWindowName() {
    var windowName =  window.location.pathname.replace("/", "")
    switch (windowName) {
        case "":
            return "Home"
        case "rsvp":
            return "RSVP"
        case "faqs":
            return "FAQs"
    }
    return windowName.charAt(0).toUpperCase() + windowName.slice(1);
}

function isMob() {
    return getWindowDimensions().width < 1000;
}

const Navbar = () => {
    const [burgerOpened, { toggle }] = useDisclosure();
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)
    const [stateMobile, setMobileState] = useState(isMob);
    const [pageName, setPageName] = useState(getWindowName);

    // const [pageTitle, setPageTitle] = useState(defaultPageTitle());
    // function defaultPageTitle() {
    //     return ;
    // }


    const screenSize = useRef();
    useEffect(() => {
        setPageName(getWindowName)
        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });

        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("resize", () => {
                screenSize.current = window.innerWidth;
            });
            window.removeEventListener("scroll", listenToScroll);

    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 20;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    const handleRouting = (event) => {
        console.log(getWindowName())
        setPageName( pageName=> {
            return event.target.id
        })

        toggle()
    }

    const activeState = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "#995D6A" : "",
            borderBottom: isActive ? "3px solid #62254D" : ""
        };
    };
    return (
        <div className={"divBar"}>
            {
                isVisible
                &&
                <div className={'topBar'}>
                    <div>
                        <ul className={'header'}>
                            <li className={"navbar-li"}>21st June 2025</li>
                            <li className={"navbar-li"}>Treberfydd House, Brecon, Wales</li>
                        </ul>
                    </div>
                    <div><h1 className='title'>Rory & Ellie</h1></div>
                </div>
            }


            {stateMobile ?
                <div>
                    <div className={"mob-burger-bar"}>
                        <Burger opened={burgerOpened} onClick={toggle} color="white" size="lg"
                                aria-label="Toggle navigation" classNames={{root: burgClasses.root}}/>
                        <div><h2 className={"mob-page-title"}>{pageName}</h2></div>
                    </div>
                    <div>
                        <Drawer opened={burgerOpened} bg={"black"} color={"black"} size="50%" onClose={toggle}
                                classNames={{
                                    content: drawClasses.content,
                                    root: drawClasses.root,
                                }}
                        >
                            <ul className={"drawer-mob-menu-class"}>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"} to='/'
                                                                                onClick={handleRouting}
                                                                                id={"Home"}>Home</NavLink></li>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                                to='/itinerary'
                                                                                onClick={handleRouting}
                                                                                id={"Itinerary"}>Itinerary</NavLink>
                                </li>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                                to='/directions'
                                                                                onClick={handleRouting}
                                                                                id={"Directions"}>Directions</NavLink>
                                </li>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                                to='/accommodation'
                                                                                onClick={handleRouting}
                                                                                id="Accommodation">Accommodation</NavLink>
                                </li>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                                to='/registry'
                                                                                onClick={handleRouting}
                                                                                id="Registry">Registry</NavLink></li>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"} to='/faqs'
                                                                                onClick={handleRouting}
                                                                                id="FAQs">FAQs</NavLink>
                                </li>
                                <li className={"drawer-mob-navbar-li"}><NavLink className={"mob-navlink"} to='/rsvp'
                                                                                onClick={handleRouting}
                                                                                id="RSVP">RSVP</NavLink>
                                </li>
                            </ul>

                        </Drawer>
                    </div>
                </div>
                : <nav className={'navb'}>
                    <ul className={"navbar-ul"}>
                        <li className={"navbar-li"}><NavLink to='/' style={activeState}>Home</NavLink></li>
                        <li className={"navbar-li"}><NavLink to='/itinerary' style={activeState}>Itinerary</NavLink>
                        </li>
                        <li className={"navbar-li"}><NavLink to='/directions' style={activeState}>Directions</NavLink>
                        </li>
                        <li className={"navbar-li"}><NavLink to='/accommodation'
                                                             style={activeState}>Accommodation</NavLink></li>
                        <li className={"navbar-li"}><NavLink to='/registry' style={activeState}>Registry</NavLink></li>
                        <li className={"navbar-li"}><NavLink to='/faqs' style={activeState}>FAQs</NavLink></li>
                        <li className={"navbar-li"}><NavLink to='/rsvp' style={activeState}>RSVP</NavLink></li>
                    </ul>
                </nav>
            }

        </div>
    );
};

export default Navbar;
