import React, {useContext, useEffect} from 'react';
import RSVPForm from "../components/RSVPForm";
import {LoadingContext, NotSubmittedContext, ReturnMessageContext} from '../App';
import {ClipLoader} from "react-spinners";

const RSVP = () => {
    const [notSubmitted, setNotSubmitted] = useContext(NotSubmittedContext);
    const [loading, setLoading] = useContext(LoadingContext);
    const [message, setMessage] = useContext(ReturnMessageContext);
    const enableRSVP = process.env.REACT_APP_RSVP_ENABLED.toLowerCase() === 'true'
    useEffect(() => {

        return () => {};

    }, []);


    const handleSubmitAgain= () => {
        setNotSubmitted(true)
    }

    return (
        <div className={"rsvp-placeholder"}>
            <img className={"rsvp-photo"} src={require('../static/cuddles.png')}/>
            {enableRSVP ?
                <div className={"rsvp-form-div"}>
                    {notSubmitted && (
                        <RSVPForm/>
                    )}
                    {!notSubmitted && (loading ?
                        <div className={"rsvp-loading"}>
                            <h2>Loading...</h2>
                            <div className={"rsvp-spinner"} style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }}>
                                <ClipLoader size={150} color={"white"} loading={loading}/>
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
                :
                <div>
                    <div className={"rsvp-submitted-message"}>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Apologies - RSVP not enabled</h2>
                        <br/>
                        <br/>
                        <h2>We are sending out invites soon!</h2>
                        <br/>
                        <br/>
                    </div>
                </div>
            }
        </div>
    );
};

export default RSVP;
