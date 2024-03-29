import React, {useEffect} from 'react';
import ItineraryEntry from "../components/ItineraryEntry";

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
                <img className={"itPhoto"} src={require('../static/cuddles.png')}/>
            </div>
            <div className={"itinerary-entries"}>
                <ItineraryEntry time="13:00" entry="Get Married"/>
                <ItineraryEntry time="16:00" entry="Dinner"/>
                <ItineraryEntry time="18:00" entry="Speeches"/>
                <ItineraryEntry time="20:00" entry="Dancing"/>
            </div>
        </div>
    );
};

export default Itinerary;
