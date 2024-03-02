import React, {useEffect} from 'react';

const FAQs= () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/registry';
                    break;
                case 'ArrowRight':
                    window.location.href = '/rsvp';
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
