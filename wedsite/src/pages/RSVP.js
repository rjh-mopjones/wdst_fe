import React, {useContext, useEffect} from 'react';
import RSVPForm from "../components/RSVPForm";
import {NotSubmittedContext, UserNameContext} from '../App';
import {useNavigate} from "react-router-dom";

const RSVP = () => {
    const [notSubmitted, setNotSubmitted] = useContext(NotSubmittedContext);
    const [userName, setUserName] = useContext(UserNameContext);
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


    const handleSubmitAgain= () => {
        setNotSubmitted(true)
    }

    return (
        <div className={"rsvp-form-div"}>
            {notSubmitted && (
            <RSVPForm/>
                )}
            {!notSubmitted && (
                <div className={"rsvp-submitted-message"}>
                    <h2>Thanks for submitting the rsvp, {userName}!</h2>
                    <br/>
                    <h2>If you would like to change your RSVP or any details, just RSVP again, we will take your latest one!</h2>

                    <div className={"rsvp-submit-again-div"}>
                        <button type="button" onClick={handleSubmitAgain} className="rsvp-submit-again-button">RSVP Again</button>
                    </div>
                </div>


            )}
        </div>
    );
};

export default RSVP;
