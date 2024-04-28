import React, {useContext, useEffect} from 'react';
import RSVPForm from "../components/RSVPForm";
import { NotSubmittedContext } from '../App';
import {useNavigate} from "react-router-dom";

const RSVP = () => {
    const {notSubmitted} = useContext(NotSubmittedContext);
    const routerNavigate = useNavigate();
    // TODO do a "thanks for submitting"
    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log(notSubmitted)
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/faqs')
                    break;
                case 'ArrowRight':
                    routerNavigate('/')
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
        <div className={"rsvp-form-div"}>
            {/*{notSubmitted && (*/}
            <RSVPForm/>
                {/*)}*/}
        </div>
    );
};

export default RSVP;
