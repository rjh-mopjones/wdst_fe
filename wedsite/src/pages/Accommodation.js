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
                <h3 className={"accommodation-text-text"}>
                    For reference, these nearby villages around Treberfydd are within a fifteen minute drive:
                </h3>
                <h3 className={"accommodation-text-text"}>
                    Bwlch, Llangorse, Talybont, Llangynidr, Llanfrynach, Crickhowell, Talgarth
                </h3>


            </div>
            <div className={"accommodation-entries"}>
            <AccommodationEntry entry={"The Bear hotel"}
                                    notes={"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                                link={"https://bearhotel.co.uk/"}/>
                <AccommodationEntry entry={"The Castle Hotel"}
                                    notes={"Located in Brecon"}
                                    link={"https://bearhotel.co.uk/"}/>
                <AccommodationEntry entry={"The Star Bunkhouse"}
                                    notes={"Located in Bwlch"}
                                    link={"https://www.starbunkhouse.com/"}/>
                <AccommodationEntry entry={"Brynderwen Farm"}
                                    notes={"Located in Brecon"}
                                    link={"https://www.tripadvisor.co.uk/Hotel_Review-g186454-d673780-Reviews-Brynderwen_Farm-Brecon_Brecon_Beacons_National_Park_Wales.html"}/>
            </div>
            <br/>
            <div className={"accommodation-text-div"}>
                <h3 className={"accommodation-text-text"}>
                    There are also a ton of options on AirBnb
                </h3>
            </div>
        </div>
    );
};

export default Accommodation;
