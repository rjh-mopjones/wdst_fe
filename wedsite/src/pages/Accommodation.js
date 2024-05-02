import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import AccommodationEntry from "../components/AccommodationEntry";

const Accommodation = () => {
    // TODO get a list of hotels
    // TODO can camp if you want but need to let us know
    const routerNavigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/directions')
                    break;
                case 'ArrowRight':
                    routerNavigate('/registry')
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
            <div className={"accommodation-text-div"}>
                <h2 className={"accommodation-text-text"}>
                    Below is a list of the accommodation options that come recommended from the venue.
                    Note that camping is available on site for free, if you would like to explore this - feel free to
                    drop us a message or put it in the RSVP and we will organise it for you.
                </h2>
                <br/>
                <br/>
                <h2 className={"accommodation-text-text"}>
                    For reference, these nearby villages around Treberfydd are within a fifteen minute drive:
                </h2>
                <h2 className={"accommodation-text-text"}>
                    Bwlch, Llangorse, Talybont, Llangynidr, Llanfrynach, Crickhowell, Talgarth
                </h2>


            </div>
            <div className={"accommodation-entries"}>
            <AccommodationEntry entry={"The Bear hotel"}
                                    notes={"Located in crickhowell, about a 15 min taxi away"}
                                link={"https://bearhotel.co.uk/"}/>
                <AccommodationEntry entry={"The Castle Hotel"}
                                    notes={"Located in Brecon, about a 15 min taxi away "}
                                    link={"https://www.breconcastle.co.uk/"}/>
                <AccommodationEntry entry={"The Star Bunkhouse"}
                                    notes={"Located in Bwlch, which is around 10 min taxi away"}
                                    link={"https://www.starbunkhouse.com/"}/>
                <AccommodationEntry entry={"Brynderwen Farm"}
                                    notes={"Located in Brecon, about 15 min taxi away"}
                                    link={"https://www.tripadvisor.co.uk/Hotel_Review-g186454-d673780-Reviews-Brynderwen_Farm-Brecon_Brecon_Beacons_National_Park_Wales.html"}/>
            </div>
            <br/>
            <div className={"accommodation-text-div"}>
                <h2 className={"accommodation-text-text"}>
                    There are also a ton of options on AirBnb! Always get in contact if you need help
                </h2>
            </div>
        </div>
    );
};

export default Accommodation;
