import React, { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/rsvp';
                    break;
                case 'ArrowRight':
                    window.location.href = '/itinerary';
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
                <img className={"homePhoto2"} src={require('../static/home-photo2.png')}/>
        </div>
    );
};

export default Home;