import React, {useEffect} from 'react';

const Accommodation = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/directions';
                    break;
                case 'ArrowRight':
                    window.location.href = '/registry';
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
