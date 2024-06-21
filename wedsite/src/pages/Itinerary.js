import React, {useEffect, useState} from 'react';

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
                <div className={"itinerary-text-mob"}>
                    <h2>
                        We will have a more fine-grained Itinerary closer to the time
                    </h2>
                    <br/>
                </div>
                <div className={"itinerary-photo"}>
                    <img className={"it-photo-mob"} src={require('../static/i-rest-my-legs.png')}/>
                </div>
                    <div className={"itinerary-text-mob"}>
                        <br/>
                        <h2>
                            For the time being, plan to get to Treberfydd House for 12:30pm 21st June 2025, ceremony is planned for 1pm!
                        </h2>
                    </div>
            </div>
                :
            <div className={"itinerary-desktop-div"}>
                <div className={"itinerary-photo"}>
                    <img className={"itPhoto"} src={require('../static/i-rest-my-legs.png')}/>
                </div>
                <div className={"itinerary-text"}>
                    <h2>
                        We will have a more fine-grained Itinerary closer to the time
                    </h2>
                    <br/>
                    <br/>
                    <h2>
                        For the time being, plan to get to Treberfydd House for 12:30pm 21st June 2025, ceremony is planned for 1pm!
                    </h2>
                </div>
            </div>
        }

        </div>
    );
};

export default Itinerary;
