import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import AccommodationEntry from "../components/AccommodationEntry";

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
            <AccommodationEntry entry={"The Bear hotel"}
                                notes={"Located in Crickhowell"} />
        </div>
    );
};

export default Accommodation;
