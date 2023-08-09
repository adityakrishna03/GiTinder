import React from 'react';
import LandingPage from "./homeComponents/LandingPage";
import Page2 from "./homeComponents/Page2";

const Home = () => {
    return (
        <div className={'pt-20 text-[#b1a6a2]'}>
            <LandingPage/>
            <Page2/>
        </div>
    );
};

export default Home;