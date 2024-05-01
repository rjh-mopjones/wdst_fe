import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";


const Home = () => {
    const routerNavigate = useNavigate();
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

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);
    return (
        <div className={"home"}>
                <img className={"homePhoto"} src={require('../static/home-photo1.png')}/>
                <h1 className={"homeTitle"}>We are getting Married</h1>
        </div>
    );
};

export default Home;