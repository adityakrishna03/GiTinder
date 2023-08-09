import React from 'react';
import phoneView from '../../images/phoneView (2).png'
import img2 from '../../images/imgs.png'

const LandingPage = () => {
    return (
        <div className={'h-screen lg:px-12 flex'}>
            <img src={phoneView} className={'scale-[0.85] mb-10 hidden md:flex'}/>
            <div className={'mt-5'}>
                <div className={'flex justify-center'}>
                    <img src={img2} className={'scale-90'}/>
                </div>
                <h1 className={'text-4xl md:text-5xl font-bold p-5 md:p-10 text-center'}>Welcome JaiBhalla03,</h1>
                <p className={'text-3xl px-5 md:px-10 text-center'}>
                    Explore public repositories on GitHub
                    the same way a user might scroll through other profiles in
                    Tinder.
                </p>
        </div>
        </div>
    );
};

export default LandingPage;