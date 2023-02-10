import React, {useState, useEffect, useRef} from 'react';

import {HiOutlineBars3BottomLeft} from 'react-icons/hi2';
import {MdClose} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import useTranslate from '../hooks/useTranslation';
import {AiFillSetting} from 'react-icons/ai'

function NavBar({activeLink}) {

    const {t,i18n}= useTranslate();

    const [subMenu, setSubMenu] = useState(false);
    const [settingsMenu, setSettingsMenu] = useState(false);
    const [fix, setFix] = useState(false);

    const switchToggle = document.querySelector('#switch-toggle');
    const app = document.querySelector('.App');
    const darkMode = useRef(false);
    
    const updateMode = useRef(true);

    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`

    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`

    function toggleTheme() {
        darkMode.current= !darkMode.current;
        localStorage.setItem('isDarkmode', darkMode.current);
    }
      
    function setFixed() {
        if (window.scrollY >= 5){
            setFix(true);
        } else {
            setFix(false);
        }
    }

    useEffect(() => {
        const updateStatus = () => {
             localStorage.getItem('isDarkmode');
        };

        if (updateMode.current) {
            updateStatus();
            updateMode.current = false;
        }

        if (!switchToggle){
            return;
        }

        if (darkMode.current) {
            switchToggle.classList.remove('bg-yellow-500','-translate-x-2');
            switchToggle.classList.add('bg-gray-700','translate-x-full');
            setTimeout(() => {
            switchToggle.innerHTML = darkIcon;
            }, 250);
            app.classList.add("dark");
        } else {
            switchToggle.classList.add('bg-yellow-500','-translate-x-2');
            switchToggle.classList.remove('bg-gray-700','translate-x-full');
            setTimeout(() => {
            switchToggle.innerHTML = lightIcon;
            }, 250);
            app.classList.remove("dark");
        }
    },[app.classList, darkIcon, lightIcon, switchToggle]);

    window.addEventListener("scroll", setFixed)
    return (
        <div className='relative z-50'>
        <nav className={`w-full h-[96px] py-7 ${fix? "bg-navbar-scroll dark:bg-navbar-scrollNight border-b filter border-navbar-border-scroll dark:border-navbar-scrollNight shadow-md backdrop:blur-lg":"bg-background dark:bg-backgroundNight"} fixed  flex flex-row items-center px-6 md:px-16 xl:px-40 3xl:px-60`}>

            <div className='text-lg font-semibold md:font-bold md:text-2xl text-heading dark:text-background'>
                LOGO
            </div>
            

            <ul className='hidden justify-end md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10 w-full'>

                <li>
                    <NavLink to='/' className={`transition-all pb-4 text-heading dark:text-background text-lg font-medium hover:text-primary-100 hover:border-b-2 ${activeLink === '/'? "border-b-2" : ""} border-secondary-100 uppercase`}>
                        {t("navbar.home")}
                    </NavLink>
                </li>
                <li>
                <NavLink to='/contact' className={`transition-all pb-4 text-heading dark:text-background text-lg font-medium hover:text-primary-100 hover:border-b-2 ${activeLink === '/contact'? "border-b-2" : ""} border-secondary-100 uppercase`}>
                        {t("navbar.contact")}
                    </NavLink>
                </li>

                <li>
                <NavLink to='/aboutus' className={`transition-all pb-4 text-heading dark:text-background text-lg font-medium hover:text-primary-100 hover:border-b-2 ${activeLink === '/aboutus'? "border-b-2" : ""} border-secondary-100 uppercase`}>
                        {t("navbar.aboutUs")}
                    </NavLink>
                </li>

            </ul>
            

            <div className='w-full flex justify-end md:hidden'>
                <button onClick={()=>{setSubMenu(!subMenu)}} className='rounded-md w-10 h-auto cursor-pointer transition-all flex justify-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-secondary-100'>
                    
                    {
                        subMenu ? 
                        <MdClose className='w-8 h-8 font-thin text-heading dark:text-background' />
                        :
                        <HiOutlineBars3BottomLeft className='w-8 h-8 font-thin text-heading dark:text-background' />
                    }
                </button>
            </div>

            <NavLink
                to="/download"
                className={`hidden md:inline-flex ml-8 md:ml-5 items-center justify-center whitespace-nowrap rounded-md border 
                          border-transparent px-6 py-2 text-base font-medium shadow-sm uppercase transition-all 
                          ${activeLink === '/download'? "border-2 border-primary-100 dark:border-primary-200 dark:hover:border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-white dark:hover:text-white transition-all dark:text-primary-200" : "bg-primary-100 text-white hover:bg-primary-200"}`}
                >
                {t("navbar.download")}
            </NavLink>

            <div className='ml-5 md:w-auto relative'>
                {
                    settingsMenu ? 
                    <MdClose onClick={() => {setSettingsMenu(!settingsMenu)}} className='w-6 h-6 md:w-7 md:h-7 cursor-pointer text-heading dark:text-background' />
                    :
                    <AiFillSetting onClick={() => {setSettingsMenu(!settingsMenu)}} className='w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:animate-spin duration-1000 text-heading dark:text-background' />
                }
                <div className={`${settingsMenu? "flex": "hidden"} absolute top-[60px] right-1 md:right-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-primary-100 dark:border-b-primary-200`}>

                </div>
                <div onMouseLeave={() => {setSettingsMenu(false)}} className={`${fix? "bg-navbar-scroll dark:bg-navbar-scrollNight filter shadow-md backdrop:blur-lg":"bg-background dark:bg-headingNight"} ${settingsMenu? "flex": "hidden"} shadow-lg absolute top-14 right-0 transition-all ease-in-out flex w-40 h-auto justify-evenly items-center mt-3 rounded-md`}>
                    <ul className='justify-evenly w-full flex flex-col text-center items-center'>

                        <li className='w-full font-semibold flex justify-center items-center h-14 border-b border-slate-300 text-center dark:text-background text-gray-500'>
                            {t("navbar.language")}
                        </li>
                        <li className='w-full flex justify-left items-center h-14 border-b border-slate-300 text-center space-x-4'>
                            <button className='w-full text-heading dark:text-background flex h-full items-center space-x-3 px-7 hover:bg-gray-300 dark:hover:bg-gray-700' onClick={()=>i18n.changeLanguage("es")}>
                                <img className='w-6 h-6' src='https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg' alt=''></img>
                                <div className='font-medium dark:text-background'>{t("navbar.spanish")}</div>
                            </button>
                        </li>
                        <li className='w-full flex justify-left items-center h-14 border-b border-slate-300 text-center space-x-4'>
                            <button className='w-full text-heading dark:text-background flex h-full items-center space-x-3 px-7 hover:bg-gray-300 dark:hover:bg-gray-700' onClick={()=>i18n.changeLanguage("en")}>
                                <img className='w-6 h-6' src='https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg' alt=''></img>
                                <div className='font-medium dark:text-background'>{t("navbar.english")}</div>
                            </button>
                        </li>
                        <li className='w-full font-semibold flex justify-center items-center h-14 border-b border-slate-300 text-center dark:text-background text-gray-500'>
                            {t("navbar.mode")}
                        </li>
                        <li className='w-full font-semibold flex justify-center items-center h-14 text-center dark:text-background text-gray-500'>
                            <button 
                                className="w-16 h-5 rounded-full bg-white dark:bg-background flex items-center transition duration-300 focus:outline-none shadow"
                                onChange={toggleTheme}>
                                <div
                                    id="switch-toggle"
                                    className="w-9 h-9 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div className={`${fix? "bg-navbar-scroll dark:bg-navbar-scrollNight filter shadow-md backdrop:blur-lg":"bg-background dark:bg-backgroundNight"} ${subMenu? "flex": "hidden"} fixed top-24 md:hidden transition-all ease-in-out flex w-full h-auto justify-evenly items-center mt-3 rounded-md`}>
            <ul className='justify-evenly w-full flex flex-col text-center items-center'>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/' className={`${activeLink==='/'? "text-secondary-100 dark:text-background" : "text-heading dark:text-navbar-scroll"} hover:text-primary-100 font-semibold hover:scale-110`}>
                    {t("navbar.home")}
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/contact' className={`${activeLink==='/contact'? "text-secondary-100 dark:text-background" : "text-heading dark:text-navbar-scroll"} hover:text-primary-100 font-semibold hover:scale-110`}>
                    {t("navbar.contact")}
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/aboutus' className={`${activeLink==='/aboutus'? "text-secondary-100 dark:text-background" : "text-heading dark:text-navbar-scroll"} hover:text-primary-100 font-semibold hover:scale-110`}>
                    {t("navbar.aboutUs")}
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 text-center uppercase'>
                    <NavLink
                    to="/download"
                    className={`md:inline-flex items-center justify-center whitespace-nowrap rounded-md border 
                            border-transparent w-full max-w-xs py-2 text-base font-medium shadow-sm uppercase transition-all 
                            ${activeLink === '/download'? "border-2 border-primary-100 dark:border-primary-200 dark:hover:border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-white dark:hover:text-white transition-all dark:text-primary-200" : "bg-primary-100 text-white hover:bg-primary-200"}`}
                        >
                        {t("navbar.download")}
                    </NavLink>
                </li>

            </ul>
        </div>
        
        </div>
    )
}

export default NavBar;
