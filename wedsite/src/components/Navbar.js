// Navbar.js

import React, {useContext, useRef} from 'react';
import {Burger, Drawer} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import burgClasses from '../styles/Burg.module.css';
import drawClasses from '../styles/Draw.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import logToServer from '../logging/logging'
import {DarkModeContext} from "../App";
const { useState, useEffect } = React;

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}

// TODO: raf colours rgb(180,199,231) text to black
// TODO: Rsvp form keeps deleting content when you switch off it
// TODO: create scripts for bringing website down, updating website
// TODO: make scripts for turning rsvp off and on
function getMopOrRory(){
    if (window.location.href.toLowerCase().includes("mop")){
        document.title = 'Mop and Ellie';
        return "Mop"
    }
    document.title = 'Rory and Ellie';
    return "Rory"
}

function getPath(){
    return window.location.pathname.replace("/", "")
}

function getWindowName() {
    let pathName = getPath();
    switch (pathName) {
        case "":
            return "Home"
        case "rsvp":
            return "RSVP"
        case "faqs":
            return "FAQs"
    }
    return pathName.charAt(0).toUpperCase() + pathName.slice(1);
}

const routeMap= new Map([
    ["", new Map([
        ['ArrowLeft',  '/rsvp'],
        ['ArrowRight', '/itinerary']
    ])],
    ['itinerary', new Map([
        ['ArrowLeft',  '/'],
        ['ArrowRight', '/directions']
    ])],
    ['directions', new Map([
        ['ArrowLeft',  '/itinerary'],
        ['ArrowRight', '/accommodation']
    ])],
    ['accommodation', new Map([
        ['ArrowLeft',  '/directions'],
        ['ArrowRight', '/registry']
    ])],
    ['registry', new Map([
        ['ArrowLeft',  '/accommodation'],
        ['ArrowRight', '/faqs']
    ])],
    ['faqs', new Map([
        ['ArrowLeft',  '/registry'],
        ['ArrowRight', '/rsvp']
    ])],
    ['rsvp', new Map([
        ['ArrowLeft',  '/faqs'],
        ['ArrowRight', '/']
    ])],
]);


const Navbar = () => {
    const [burgerOpened, { toggle }] = useDisclosure();
    const [isVisible, setIsVisible] = useState(true);
    const [clientData, setClientData] = useState("");
    const [mopOrRory, setMopOrRory] = useState("Rory");
    const [height, setHeight] = useState(0)
    const [stateMobile, setMobileState] = useState(isMob);
    const [pageName, setPageName] = useState(getWindowName);
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    const routerNavigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
            if (document.body.getAttribute('data-theme') === 'dark'){
                setDarkMode(false)
                document.body.setAttribute('data-theme', 'light');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                setDarkMode(true)
            }
        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight'){
            routerNavigate(routeMap.get(getPath()).get(event.key))
        }
        setPageName(getWindowName)
    };

    useEffect(() => {
        console.log(darkMode._currentValue[0])
        if (clientData === ""){
            fetch( process.env.REACT_APP_CLIENT_FETCH_ENDPOINT).then((response) => response.json())
                .then((data) => {
                    setClientData(JSON.stringify(data));
                    return data
                })
                .then((data) => {
                    logToServer(window.location.href + " pulled client: " + JSON.stringify(data))
                }).catch((error) => console.log("client pull failed "))
        } else{
            logToServer(window.location.href + " client: "  + clientData)
        }

        setPageName(getWindowName)
        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });
        setMopOrRory(getMopOrRory)
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener('keydown', handleKeyDown)
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
        setPageName( pageName=> {
            return event.target.id
        })
        toggle()
    }

    const activeState = ({ isActive }) => {
        return {
            backgroundColor: isActive ? " var(--color-fg)" : "",
            color: isActive ? " var(--color-bg)" : "",
            borderBottom: isActive ? "3px solid var(--color-fg)" : ""
        };
    };
    return (
        <div className={"divBar"}>
            {
                isVisible
                &&
                    <div className={ stateMobile ? 'topBar-mob' : "topBar"}>
                        <div>
                            <ul className={stateMobile ? 'header-mob' : 'header'}>
                                <li className={stateMobile ? "navbar-li-mob" : 'header'}>21st June 2025</li>
                                <li className={stateMobile ? "navbar-li-mob" : 'header'}>Treberfydd House, Brecon, Wales</li>
                            </ul>
                        </div>
                        <div><h1 className={stateMobile ? 'title-mob' : 'title'}>{mopOrRory} & Ellie</h1></div>
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
