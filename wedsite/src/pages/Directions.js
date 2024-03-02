import React, {useEffect} from 'react';

const Directions = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/itinerary';
                    break;
                case 'ArrowRight':
                    window.location.href = '/accommodation';
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
        <div className={"directions"}>
            <div className={"dirPhotoWrap"}>
                <img className={"dirPhoto"} src={require('../static/i-rest-my-legs.png')}/>
            </div>
        </div>
    );
};

export default Directions;