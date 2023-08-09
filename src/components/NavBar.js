import React, {useState} from 'react';
import logo from '../images/logo3.jpeg'
import {Link} from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose, AiFillGithub} from 'react-icons/ai'

const style = {
    imgStyle: 'w-[7rem] md:w-[10rem] mt-2 mb-2 ml-2',
    toggleButton: 'text-4xl text-[#b1a6a2] md:hidden block cursor-pointer mr-3',
    liStyle: 'text-[#b1a6a2] mx-6 my-6 md:my-0 flex justify-center',
    linkStyle: 'text-xl',
    signLinkStyle: 'bg-[#b1a6a2] border rounded-md px-3 py-1 text-xl flex justify-center hover:bg-[#0d1117] hover:text-[#b1a6a2] duration-100 ease-in',
    signStyle: 'text-[#161b22] mx-6 my-6 md:my-0 flex justify-center',
    ulStyle: 'md:flex md:items-center z-[1] md:z-auto md:static bg-[#0d1117] absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500',
    newUlStyle: 'md:flex md:items-center z-[1] md:z-auto md:static bg-[#0d1117] absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 opacity-100 top-[55px] transition-all ease-in duration-500',
}

const NavBar = () => {
    const[toggle, setToggle] = useState(true);
    const handleClick = ()=>{
        setToggle(current=>!current);
        console.log(toggle)
    }
    //getting the session toggle the sign in out button
    const[session, setSession] = useState(true);
    const handleClickButton = ()=>{
        setSession(current=> !current);
    }
    const github = ()=>{
        window.open("http://localhost:4000/auth/github", "_self")
    }
    const logout = ()=>{
        window.open("http://localhost:4000/auth/logout", "_self")
    }
    return (
        <div className={'fixed w-full z-[1] font-light'}>
            <nav className={'bg-[#0d1117] py-1 md:flex md:justify-between md:items-center'}>
                <div className={'flex justify-between items-center'}>
                    <img src={logo} alt={'logo'} className={style.imgStyle}/>
                    <span>
                        {(toggle)?<AiOutlineMenu className={style.toggleButton} onClick={handleClick}/>:
                            <AiOutlineClose className={style.toggleButton} onClick={handleClick}/>}
                    </span>
                </div>
                <ul
                    className={(toggle)?style.ulStyle:style.newUlStyle}>
                    <li className={style.liStyle}>
                        <Link to={'/'} className={style.linkStyle}>Home</Link>
                    </li>
                    <li className={style.liStyle}>
                        <Link to={'/explore'} className={style.linkStyle}>Explore</Link>
                    </li>
                    <li className={style.liStyle}>
                        <Link to={'/dashboard'} className={style.linkStyle}>Dashboard</Link>
                    </li>
                    <li className={style.signStyle}>
                        {session?(<button onClick={github} className={style.signLinkStyle}>
                            <div className={'flex'}>
                                <p className={'pt-0.5'}>
                                    Sign In
                                </p>
                                <AiFillGithub
                                    size={35}
                                    className={'ml-3'}
                                />
                            </div>
                        </button>):(
                            <button
                                className={style.signLinkStyle}
                                onClick={logout}
                            >
                                <div className={'flex'}>
                                    <p className={'pt-0.5'}>
                                        Sign Out
                                    </p>
                                    <AiFillGithub
                                        size={35}
                                        className={'ml-3'}
                                    />
                                </div>
                            </button>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;