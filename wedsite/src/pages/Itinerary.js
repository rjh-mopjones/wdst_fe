import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Itinerary = () => {
    const routerNavigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/')
                    break;
                case 'ArrowRight':
                    routerNavigate('/directions')
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
        <div className={"itinerary"}>
            <div className={"itPhotoWrap"}>
                <img className={"itPhoto"} src={require('../static/i-rest-my-legs.png')}/>
            </div>
            <div className={"itinerary-text"}>
                <h2>
                    We will have a more fine-grained Itinerary closer to the time
                </h2>
                <br/>
                <h2>
                    For the time being, plan to get to Treberfydd House for 12:30pm 21st June 2025!
                </h2>
            </div>

        </div>
    );
};

export default Itinerary;
