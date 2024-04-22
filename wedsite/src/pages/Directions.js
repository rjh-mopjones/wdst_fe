import React, {useEffect} from 'react';

const Directions = () => {
    // TODO directions: parking available onsite
    // TODO directions: from london -> train to newport, abergavenny (30 min taxi), brecon (15min taxi) etc
    // TODO directions: from newport -> train to abergavenny (probably best to drive)
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
            <div className={"treb-house"}>
                <img className={"treb-photo"} src={require('../static/treberfydd-house-3.png')}/>
            </div>
            <div className={"embedded-map"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.6932000464158!2d-3.269962922624205!3d51.9213083719104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e2c68f072827d%3A0x190c7348ddd0815c!2sTreberfydd%20House!5e0!3m2!1sen!2suk!4v1709416671825!5m2!1sen!2suk"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={"dirPhotoWrap"}>
                <img className={"dirPhoto"} src={require('../static/i-rest-my-legs.png')}/>
            </div>
        </div>
    );
};

export default Directions;