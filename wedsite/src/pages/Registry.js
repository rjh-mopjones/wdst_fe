import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}


const Registry = () => {
    // TODO talk to tom about the experiences thing
    const [stateMobile, setMobileState] = useState(isMob);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobileState(isMob)
        });

        return () => {};

    }, []);

    return (
        <div className={"registry"}>
            <div className={"registry-wrap-mob"}>
                <h2 className={"registry-placeholder"}>
                    Above all we just want people to be there on the day, however we understand that some guests
                    will want to buy us wedding gifts.
                </h2>
                <br/>
                <br/>
                <h2 className={"registry-placeholder"}>
                    As we live in a relatively small flat in London we already are struggling for room, so we have
                    opted for a Honeymoon fund Registry.
                </h2>
                <br/>
                <br/>
                <h2 className={"registry-placeholder"}>
                    I kindly ask that you keep the items on this registry secret to Ellie as the majority of the items
                    on there are a surprise!
                </h2>
                <br/>
                <br/>
                <h2 className={"registry-placeholder"}>
                    If you wish to get us a physical gift or give money in person, there is an option on the registry
                    at the bottom of the page, however if you want to do it completely separate don't hesitate to get in
                    contact.
                </h2>
                <br/>
                <br/>
                <h2 className={"registry-placeholder"}>
                    Thank you, the button below will open the registry in a new tab!
                </h2>
                <br/>
                <br/>
                <Link to={"https://www.our-dream-honeymoon.co.uk/hedderman.crump.25944"} target="_blank"
                      className={"link"}>
                    <button type="registry">I Promise Not to Tell Ellie!</button>
                </Link>
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default Registry;
