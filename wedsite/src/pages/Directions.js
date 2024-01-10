import React from 'react';

const Directions = () => {
    return (
        <div className={"directions"}>
            <div className={"dirPhotoWrap"}>
                <img className={"dirPhoto"} src={require('../static/i-rest-my-legs.png')}/>
            </div>
        </div>
    );
};

export default Directions;