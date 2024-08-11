import React, {useEffect, useState} from 'react';

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}

const Directions = () => {
    const [stateMobile, setMobileState] = useState(isMob);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });

        return () => {
            window.removeEventListener("resize", () => {
            });
        };

    }, []);
    return (
        <div className={"directions"}>
            {stateMobile ?
                <div className={"directions-mobile"}>
                    <div className={"treb-house-mob"}>
                        <img className={"treb-photo"} src={require('../static/mobile/treberfydd-house-mob-3.png')}/>
                    </div>
                    <div className={"embedded-map-mob"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.6932000464158!2d-3.269962922624205!3d51.9213083719104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e2c68f072827d%3A0x190c7348ddd0815c!2sTreberfydd%20House!5e0!3m2!1sen!2suk!4v1709416671825!5m2!1sen!2suk"
                            width="350" height="300" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={"dir-text-mob"}>
                        <h2>How to get there from Newport</h2>
                        <br/>
                        <p>Get a train to Abergervenny (30 min taxi)</p>
                        <br/>
                        <br/>
                        <h2>How to get there from London</h2>
                        <br/>
                        <p>Quickest way is to get a train to Newport, then get a train to Abergavenny (30 min taxi) </p>
                        <br/>
                        <br/>
                        <h2>Driving</h2>
                        <br/>
                        <p>There will be parking available on site for people who are driving.</p>
                        <br/>
                        <br/>
                        <h2>Coaches</h2>
                        <br/>
                        <p>We are looking at providing coaches from Newport and Abergavenny,
                            these will be organised closer to the time and we will let you know!</p>
                    </div>
                </div>
                :
                <div className={"directions-desktop"}>
                    <div className={"treb-house"}>
                        <img className={"treb-photo"} src={require('../static/treberfydd-house-4.png')}/>
                    </div>
                    <div className={"embedded-map"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.6932000464158!2d-3.269962922624205!3d51.9213083719104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e2c68f072827d%3A0x190c7348ddd0815c!2sTreberfydd%20House!5e0!3m2!1sen!2suk!4v1709416671825!5m2!1sen!2suk"
                            width="600" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={"dir-text"}>
                        <h2>How to get there from Newport</h2>
                        <br/>
                        <p>Get a train to Abergervenny (30 min taxi)</p>
                        <br/>
                        <br/>
                        <h2>How to get there from London</h2>
                        <br/>
                        <p>Quickest way is to get a train to Newport, then get a train to Abergavenny (30 min taxi)</p>
                        <br/>
                        <br/>
                        <h2>Driving</h2>
                        <br/>
                        <p>There will be parking available on site for people who are driving</p>
                        <br/>
                        <br/>
                        <h2>Coaches</h2>
                        <br/>
                        <p>We are looking at providing coaches from Newport and Abergavenny,
                            these will be organised closer to the time and we will let you know!</p>
                    </div>
                </div>
            }
        </div>
                );
            };

export default Directions;