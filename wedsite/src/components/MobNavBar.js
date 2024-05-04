import {NavLink} from "react-router-dom";
import React from "react";

const MobNavbar = () => {

    return (
        <div>
            <nav role="mob-navb">
                <div id="mob-menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="mob-menu" className={"mob-menu-class"}>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"} to='/'>Home</NavLink></li>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                 to='/itinerary'>Itinerary</NavLink></li>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                 to='/directions'>Directions</NavLink></li>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                 to='/accommodation'>Accommodation</NavLink></li>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"}
                                                                 to='/registry'>Registry</NavLink></li>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"} to='/faqs'>FAQs</NavLink>
                        </li>
                        <li className={"mob-navbar-li"}><NavLink className={"mob-navlink"} to='/rsvp'>RSVP</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default MobNavbar;
