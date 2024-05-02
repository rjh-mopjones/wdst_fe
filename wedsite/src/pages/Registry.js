import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Registry = () => {
    // TODO talk to tom about the experiences thing
    const routerNavigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/accommodation')
                    break;
                case 'ArrowRight':
                    routerNavigate('/faqs')
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
            <div className={"registry-wrap"}>
                <h2 className={"registry-placeholder"}>
                    I'm sure everyone is very anxious to shower us in gifts, but for the time being just plan to get
                    there on the day!
                </h2>
                <br/>
                <h2 className={"registry-placeholder"}>
                    A registry is in the works
                </h2>
            </div>
        </div>
    );
};

export default Registry;
