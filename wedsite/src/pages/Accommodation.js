import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Accommodation = () => {
    // TODO get a list of hotels
    // TODO can camp if you want but need to let us know
    const routerNavigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/directions')
                    break;
                case 'ArrowRight':
                    routerNavigate('/registry')
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
        <div className={"accommodation"}>
                <h2>Welcome to the Accommodation Page</h2>
                <p>This is the accommodation page content. Feel free to add more information here.</p>
        </div>
    );
};

export default Accommodation;
