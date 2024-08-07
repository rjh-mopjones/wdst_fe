import React, {useEffect, useState} from 'react';
import AccommodationEntry from "../components/AccommodationEntry";

function isMob() {
    const { innerWidth: width, innerHeight: height } = window;
    return width < 1000;
}

const Accommodation = () => {
    const [stateMobile, setMobileState] = useState(isMob);
    useEffect(() => {
        return () => {
            window.addEventListener("resize", () => {
                setMobileState(isMob)
            });
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
                <br/>
                <br/>
                <div className={"accommodation-bunkhouse"}>
                    <h2 className={"accommodation-text-text"}>
                        Note that we have also pre-booked a bunkhouse that sleeps 30 people, it is quite cheap at £35
                        per night.
                        <br/>
                        if you are interested in staying at the bunkhouse, please get in contact or mention it in the
                        additional message part of the RSVP.
                    </h2>

                </div>
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
