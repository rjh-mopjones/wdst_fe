import React, {useEffect} from 'react';

const RSVP = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/faqs';
                    break;
                case 'ArrowRight':
                    window.location.href = '/';
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
        <div className={"rsvp"}>
            <h2>Répondez S'il Vous Plaît</h2>
        </div>
    );
};

export default RSVP;
