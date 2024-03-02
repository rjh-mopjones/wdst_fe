import React, {useEffect} from 'react';

const Registry = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    window.location.href = '/accommodation';
                    break;
                case 'ArrowRight':
                    window.location.href = '/faqs';
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
        <div className={"registry"}>
            <div className={"regWrap"}>
                <h2>Welcome to the Registry Page</h2>
                <p>This is the registry page content. Feel free to add more information here.</p>
            </div>
        </div>
    );
};

export default Registry;
