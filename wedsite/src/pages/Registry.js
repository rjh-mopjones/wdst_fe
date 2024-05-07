import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}


const Registry = () => {
    // TODO talk to tom about the experiences thing
    const [stateMobile, setMobileState] = useState(isMob);
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
        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);

    return (
        <div className={"registry"}>

            {stateMobile ?
            <div className={"registry-wrap-mob"}>
                <h2 className={"registry-placeholder"}>
                    I'm sure everyone is very anxious to shower us in gifts, but for the time being just plan to get
                    there on the day!
                </h2>
                <br/>
                <h2 className={"registry-placeholder"}>
                    A registry is in the works
                </h2>
            </div>
                :
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
            }
        </div>
    );
};

export default Registry;
