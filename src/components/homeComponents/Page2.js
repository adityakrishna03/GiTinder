import React, {useEffect} from 'react';
import image1 from '../../images/hadHai.png'
import left from '../../images/left.png'
import right from '../../images/right.png'
import '../../animation.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Page2 = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div className={'lg:px-12 lg:py-10'}>
            <section
                className={'flex flex-col-reverse md:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl'}
            >
                <p className={'p-16 text-3xl font-thin text-white'}>
                    csdf erfefew eewf csdf erfefew eewf csdf erfefew eewf csdf erfefew eewf csdf erfefew eewfcsdf erfefew eewfcsdf erfefew eewf
                    csdf erfefew eewfcsdf erfefew eewfcsdf erfefew eewfcsdf erfefew eewf
                </p>
                <img src={left}
                     data-aos={'fade-right'}
                />
            </section>
            <section
                className={'thisIsSection flex flex-col md:flex-row'}
            >
                <img src={right} className={''}
                     data-aos={'fade-left'}
                />
                <p className={'p-16 text-3xl font-thin text-white'}>
                    csdf erfefew eewf csdf erfefew eewf csdf erfefew eewf csdf erfefew eewf csdf erfefew eewfcsdf erfefew eewfcsdf erfefew eewf
                    csdf erfefew eewfcsdf erfefew eewfcsdf erfefew eewfcsdf erfefew eewf
                </p>
            </section>
        </div>
    );
};

export default Page2;