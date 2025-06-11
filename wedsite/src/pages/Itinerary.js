import React, {useEffect, useState} from 'react';
import { List } from '@mantine/core';

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}

const Itinerary = () => {
    const [stateMobile, setMobileState] = useState(isMob);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });

        return () => {};

    }, []);
    return (
        <div className={"itinerary"}>
            { stateMobile ?
                <div className={"itinerary-mobile-div"}>
                    <div className="initerary-list-container-mob">
                        <ul>
                            <li>12:15pm – Guests begin to arrive</li>
                            <li>12:45pm – Seated for ceremony</li>
                            <li>1:00pm – It’s a marriage ting</li>
                            <li>1:30pm – Drinks reception and pictures</li>
                            <li>3:30pm – Wedding breakfast</li>
                            <li>7:00pm – Cut the cake</li>
                            <li>8:00pm – First dance</li>
                            <li>9:00pm – Hot dogs</li>
                            <li>12:00am – Please leave (see taxi’s below)</li>
                        </ul>
                    </div>
                    <div className={"itinerary-photo"}>
                        <img className={"it-photo-mob"} src={require('../static/i-rest-my-legs.png')}/>
                    </div>
                    <div className={"itinerary-taxis"}>
                        <br/>
                        <br/>
                        <h3>We STRONGLY recommend you book a taxi in advance to get you home. Best to do this as soon as
                            possible as it’s a popular wedding area! Below are details for some local taxi places (there
                            is
                            no uber).</h3>
                        <br/>
                        <h3>CTE Taxis</h3>
                        <h3>crickhowelltaxis.com</h3>
                        <h3>+44 1873 811764</h3>
                        <br/>
                        <h3>Abergavenny Taxis</h3>
                        <h3>abergavennytaxis.com</h3>
                        <h3>+44 1873 854140</h3>
                        <br/>
                        <h3>Julians Taxi</h3>
                        <h3>julians-taxis.co.uk</h3>
                        <h3>+44 7970 182283</h3>
                        <br/>
                        <h3>A Cabs of Abergavenny</h3>
                        <h3>acabsofabergavenny.co.uk</h3>
                        <h3>+44 7958 702208</h3>
                        <br/>
                        <h3>Brecon Taxis</h3>
                        <h3>brecontaxis.co.uk</h3>
                        <h3>+44 1874 623444</h3>
                        <br/>
                        <h3>John Prior</h3>
                        <h3>07891 782907</h3>
                        <h3>taxitaxi-brecon.co.uk</h3>
                        <br/>
                        <h3>Talgarth Taxi</h3>
                        <h3>01874 618560 / 07894458400</h3>
                        <h3>talgarthtaxi.com</h3>
                        <br/>
                        <h3>Big Mike</h3>
                        <h3>07989 998706</h3>
                        <br/>
                        <h3>Keith’s Taxi</h3>
                        <h3>07961 216724</h3>
                        <br/>
                    </div>
                </div>
                :
                <div className={"itinerary-desktop-div"}>
                    <div className={"itinerary-photo"}>
                        <img className={"itPhoto"} src={require('../static/i-rest-my-legs.png')}/>
                    </div>
                    <div className="initerary-list-container">
                        <ul>
                            <li>12:15pm – Guests begin to arrive</li>
                            <li>12:45pm – Seated for ceremony</li>
                            <li>1:00pm – It’s a marriage ting</li>
                            <li>1:30pm – Drinks reception and pictures</li>
                            <li>3:30pm – Wedding breakfast</li>
                            <li>7:00pm – Cut the cake</li>
                            <li>8:00pm – First dance</li>
                            <li>9:00pm – Hot dogs</li>
                            <li>12:00am – Please leave (see taxi’s below)</li>
                        </ul>
                    </div>
                    <div className={"itinerary-taxis"}>
                        <br/>
                        <br/>
                        <h3>We STRONGLY recommend you book a taxi in advance to get you home. Best to do this as soon as
                            possible as it’s a popular wedding area! Below are details for some local taxi places (there
                            is
                            no uber).</h3>
                        <br/>
                        <h3>CTE Taxis</h3>
                        <h3>crickhowelltaxis.com</h3>
                        <h3>+44 1873 811764</h3>
                        <br/>
                        <h3>Abergavenny Taxis</h3>
                        <h3>abergavennytaxis.com</h3>
                        <h3>+44 1873 854140</h3>
                        <br/>
                        <h3>Julians Taxi</h3>
                        <h3>julians-taxis.co.uk</h3>
                        <h3>+44 7970 182283</h3>
                        <br/>
                        <h3>A Cabs of Abergavenny</h3>
                        <h3>acabsofabergavenny.co.uk</h3>
                        <h3>+44 7958 702208</h3>
                        <br/>
                        <h3>Brecon Taxis</h3>
                        <h3>brecontaxis.co.uk</h3>
                        <h3>+44 1874 623444</h3>
                        <br/>
                        <h3>John Prior</h3>
                        <h3>07891 782907</h3>
                        <h3>taxitaxi-brecon.co.uk</h3>
                        <br/>
                        <h3>Talgarth Taxi</h3>
                        <h3>01874 618560 / 07894458400</h3>
                        <h3>talgarthtaxi.com</h3>
                        <br/>
                        <h3>Big Mike</h3>
                        <h3>07989 998706</h3>
                        <br/>
                        <h3>Keith’s Taxi</h3>
                        <h3>07961 216724</h3>
                        <br/>
                    </div>

                </div>
            }

        </div>
    );
};

export default Itinerary;
