import React, { useState, useMemo, useRef } from 'react';
import iconLanguage from "../../utils/IconLanguage";

import {
    AiOutlineClose,
    AiFillStar,
    AiOutlineStar,
    AiOutlineFork,
    AiFillGithub,
    AiOutlineEye,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineRight, AiOutlineLeft, AiOutlineRedo
} from "react-icons/ai";
import {BsFillLightningChargeFill} from "react-icons/bs";
import TinderCard from 'react-tinder-card'
import avatar from '../../images/avatar.png'
import {TiMessages} from "react-icons/ti";
import {RiUserFollowLine} from "react-icons/ri";
import {profiles} from "../../utils/data";
import IconLanguage from "../../utils/IconLanguage";
import {BiBlock} from "react-icons/bi";


const style = {
    tinderCardWrapper: `w-full h-full absolute`,
    wrapper: `text-[#b1a6a2] w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative pt-4 md:pt-2 bg-[#161b22] rounded-3xl`,
    avatarStyle: 'border rounded-full w-28 mx-auto',
    name: 'text-2xl font-bold my-2 md:mt-1 md:mb-0 md:text-xl select-none',
    icon: 'text-black hover:scale-100',
    description: 'md:text-sm select-none',
    techStack: 'flex justify-between w-full py-4 md:py-1 select-none',
    tech: 'py-1 px-2 md:px-1 md:py-0 text-xs',
    ownerInfo: 'py-4 md:py-2 flex select-none',
    repoInfo: 'py-4 md:py-2',
}

const GithubCardItem = ({name, description, techUsed, status, ownerName, type, followers, following, index}) => {
    const [currentIndex, setCurrentIndex] = useState(profiles.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)
    const childRefs = useMemo(
        () =>
            Array(profiles.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )
    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < profiles.length - 1

    const canSwipe = currentIndex >= 0

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }
    const outOfFrame = (name, idx) => {
        console.log(`${name} ${idx} left the screen!`, currentIndexRef.current)
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
    const swipe = async (dir) => {
        if (canSwipe && currentIndex < profiles.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }
    console.log(techUsed)
    return (
        <TinderCard
            ref={childRefs[index]}
            className={style.tinderCardWrapper}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, index)}
            onCardLeftScreen={() => outOfFrame(index)}
        >
            <div className={style.wrapper}>
                <div className={'w-full h-full flex flex-col justify-between pt-[2rem] md:pt-0'}>
                    <div className={'flex flex-col justify-around px-5 md:mt-5'}>
                        <h1 className={style.name}>
                            {name}
                        </h1>
                        <div className={style.description}>
                            {description}
                        </div>
                        <hr className={'border-gray-400'}/>
                        <i className={'text-xs select-none'}>Tech Used</i>
                        <ul className={style.techStack}>
                            <li className={style.tech}>
                                <IconLanguage language={"javascript"}/>
                            </li>
                            <li className={style.tech}>
                                <IconLanguage language={"html"}/>
                            </li>
                            <li className={style.tech}>
                                <IconLanguage language={"css"}/>
                            </li>
                            <li className={style.tech}>
                                <IconLanguage language={"python"}/>
                            </li>
                        </ul>
                        <hr className={'border-gray-400'}/>
                        <div className={style.repoInfo}>
                            <ul className={'flex font-light justify-around select-none'}>
                                <li className={'flex'}>12 <AiOutlineEye size={23} className={'mx-1'}/></li>
                                <li className={'flex'}>12 <AiOutlineFork size={23} className={'mx-1'}/></li>
                                <li className={'flex'}>34 <AiOutlineStar size={23} className={'mx-1'}/></li>
                            </ul>
                            {(status==='Deployed')?(<div
                                className={'mt-2 bg-green-500 inline-block text-white rounded-full select-none px-2 md:px-1 mr-1 float-right'}
                            >
                                {status}
                            </div>):(
                                <div
                                    className={'mt-2 bg-red-500 inline-block text-white rounded-full select-none px-2 md:px-1 mr-1 float-right'}
                                >
                                    {status}
                                </div>
                            )}
                        </div>
                        <hr className={'border-gray-400'}/>
                        <div className={style.ownerInfo}>
                            <div className={'flex flex-col justify-center'}>
                                <img src={avatar} className={style.avatarStyle}/>
                            </div>
                            <div className={'flex flex-col p-3 md:p-2'}>
                                <div className={'flex flex-col'}>
                                    <h className={'text-lg font-bold'}>{ownerName}</h>
                                    <i>{type}</i>
                                </div>
                                <div className={'flex md:text-sm'}>
                                    <div>{followers} followers</div>
                                    <div>{following} following</div>
                                </div>

                            </div>
                        </div>
                        <hr className={'border-gray-400'}/>
                    </div>
                    <div>
                        <div className={'flex justify-between'}>
                            <div
                                className={'ml-10 my-3 bg-red-700 rounded-full inline-block hover:scale-110 duration-100 ease-in-out'}
                                onClick={() => swipe('left')}
                            >
                                <AiOutlineLeft size={40} className={'m-1 text-white'}/>
                            </div>
                            <div
                                className={'my-3 bg-blue-500 rounded-full inline-block hover:scale-110 duration-100 ease-in-out'}
                                onClick={() => goBack()}
                            >
                                <AiOutlineRedo size={40} className={'m-1 text-white'}/>
                            </div>
                            <div
                                className={'mr-10 my-3 bg-green-500 rounded-full inline-block hover:scale-110 duration-100 ease-in-out'}
                                onClick={() => swipe('right')}
                            >
                                <AiOutlineRight size={40} className={'m-1 text-white'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-around bg-[#b1a6a2] w-full px-3 py-2'}>
                        <div className={'hover:scale-110 duration-100'}>
                            <AiFillGithub className={style.icon} size={30}/>
                        </div>
                        <div className={'hover:scale-110 duration-100'}>
                            <BiBlock className={style.icon} size={30}/>
                        </div>
                        <div className={'hover:scale-110 duration-100'}>
                            <AiOutlineStar className={style.icon} size={30}/>
                        </div>
                        <div className={'hover:scale-110 duration-100'}>
                            <RiUserFollowLine className={style.icon} size={30}/>
                        </div>
                    </div>
                </div>
            </div>

        </TinderCard>

    );
};

export default GithubCardItem;