import React from 'react';


const Home = () => {
    return (
        <div className={"home"}>
                <img className={"homePhoto"} src={require('../static/home-photo1.png')}/>
                <h1 className={"homeTitle"}>We are getting Married</h1>
                <img className={"homePhoto2"} src={require('../static/home-photo2.png')}/>
        </div>
    );
};

export default Home;