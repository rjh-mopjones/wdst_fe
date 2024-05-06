import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}

const Home = () => {
    const routerNavigate = useNavigate();
    const [stateMobile, setMobileState] = useState(isMob);
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/rsvp')
                    break;
                case 'ArrowRight':
                    routerNavigate('/itinerary')
                    break;
                default:
                // Do nothing for other keys
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);
    return (
        <div className={"home"}>
            {stateMobile ?
                <img className={"home-photo-mob-1"} src={require('../static/mobile/home-mob-1-sat.png')}/>
                :
                <img className={"homePhoto"} src={require('../static/home-photo-sm.png')}/>
            }
            <h1 className={"homeTitle"}>We are getting Married</h1>
            {stateMobile  &&
                <img className={"home-photo-mob-2"} src={require('../static/mobile/home-mob-2-sat.png')}/>
            }
        </div>
    );
};

export default Home;