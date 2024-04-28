import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const FAQs= () => {
    const routerNavigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/registry')
                    break;
                case 'ArrowRight':
                    routerNavigate('/rsvp')
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
        <div className={"faqs"}>
            <h2>Welcome to the FAQs Page</h2>
            <p>This is the faqs page content. Feel free to add more information here.</p>
        </div>
    );
};

export default FAQs;
