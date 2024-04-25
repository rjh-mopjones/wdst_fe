import React, {useEffect} from 'react';

const Itinerary = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/';
                    break;
                case 'ArrowRight':
                    window.location.href = '/directions';
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
