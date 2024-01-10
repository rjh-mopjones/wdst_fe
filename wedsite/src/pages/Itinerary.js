import React from 'react';

const Itinerary = () => {
    return (
        <div className={"itinerary"}>
            <div className={"itPhotoWrap"}>
                <img className={"itPhoto"} src={require('../static/cuddles.png')}/>
            </div>
        </div>
    );
};

export default Itinerary;
