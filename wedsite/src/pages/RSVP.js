import React, {useContext, useEffect, useState} from 'react';
import RSVPForm from "../components/RSVPForm";
import {LoadingContext, NotSubmittedContext, ReturnMessageContext, SubmitErrorContext, UserNameContext} from '../App';
import {LineWave} from "react-loader-spinner";
import {ClipLoader} from "react-spinners";

const RSVP = () => {
    const [notSubmitted, setNotSubmitted] = useContext(NotSubmittedContext);
    const [loading, setLoading] = useContext(LoadingContext);
    const [message, setMessage] = useContext(ReturnMessageContext);
    const [submitError, setSubmitError] = useContext(SubmitErrorContext);

    useEffect(() => {

        return () => {};

    }, []);


    const handleSubmitAgain= () => {
        setNotSubmitted(true)
    }

    return (
        <div className={"rsvp-form-div"}>
            {notSubmitted && (
            <RSVPForm/>
                )}
            {!notSubmitted && (loading ?
                        <div className={"rsvp-loading"}>
                            <h2>Loading...</h2>
                            <div className={"rsvp-spinner"} style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                <ClipLoader  size={150} color={"white"} loading={loading} />
                            </div>
                        </div>
                        :
                        <div className={"rsvp-submitted-message"}>
                            <h2>{message.toString()}</h2>
                            <br/>
                            <h2>If you would like to change your RSVP or any details, just RSVP again, we will take your
                                latest one!</h2>

                            <div className={"rsvp-submit-again-div"}>
                                <button type="button" onClick={handleSubmitAgain}
                                        className="rsvp-submit-again-button">RSVP Again
                                </button>
                            </div>
                        </div>)
            }
        </div>
    );
};

export default RSVP;
