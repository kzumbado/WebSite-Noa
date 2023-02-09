import React, {useState} from 'react';

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

    function setFixed() {
        if (window.scrollY >= 5){
            setFix(true);
        } else {
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFixed)
    return (
        <div className='relative z-50'>
        <nav className={`w-full h-[96px] py-7 ${fix? "bg-navbar-scroll border-b filter border-navbar-border-scroll shadow-md backdrop:blur-lg":"bg-background"} fixed  flex flex-row items-center px-6 md:px-16 xl:px-40 3xl:px-60`}>

            <div className='text-lg font-semibold md:font-bold md:text-2xl text-heading'>
                LOGO
            </div>
            

            <ul className='hidden justify-end md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10 w-full'>

                <li>
                    <NavLink to='/' className={`transition-all pb-4 text-heading text-lg font-medium hover:text-primary-100 hover:border-b-2 ${activeLink === '/'? "border-b-2" : ""} border-secondary-100 uppercase`}>
                        {t("navbar.home")}
                    </NavLink>
                </li>
                <li>
                <NavLink to='/contact' className={`transition-all pb-4 text-heading text-lg font-medium hover:text-primary-100 hover:border-b-2 ${activeLink === '/contact'? "border-b-2" : ""} border-secondary-100 uppercase`}>
                        {t("navbar.contact")}
                    </NavLink>
                </li>

                <li>
                <NavLink to='/aboutus' className={`transition-all pb-4 text-heading text-lg font-medium hover:text-primary-100 hover:border-b-2 ${activeLink === '/aboutus'? "border-b-2" : ""} border-secondary-100 uppercase`}>
                        {t("navbar.aboutUs")}
                    </NavLink>
                </li>

            </ul>
            

            <div className='w-full flex justify-end md:hidden'>
                <button onClick={()=>{setSubMenu(!subMenu)}} className='rounded-md w-10 h-auto cursor-pointer transition-all flex justify-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-secondary-100'>
                    
                    {
                        subMenu ? 
                        <MdClose className='w-8 h-8 font-thin' />
                        :
                        <HiOutlineBars3BottomLeft className='w-8 h-8 font-thin' />
                    }
                </button>
            </div>

            <NavLink
                to="/download"
                className={`hidden md:inline-flex ml-8 md:ml-5 items-center justify-center whitespace-nowrap rounded-md border 
                          border-transparent px-6 py-2 text-base font-medium shadow-sm uppercase transition-all 
                          ${activeLink === '/download'? "border-2 border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-white" : "bg-primary-100 text-white hover:bg-primary-200"}`}
                >
                {t("navbar.download")}
            </NavLink>

            <div className='ml-5 md:w-auto relative' onClick={() => {setSettingsMenu(!settingsMenu)}}>
                {
                    settingsMenu ? 
                    <MdClose className='w-6 h-6 md:w-7 md:h-7 cursor-pointer' />
                    :
                    <AiFillSetting className='w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:animate-spin duration-1000 text-heading' />
                }
                <div className={`${settingsMenu? "flex": "hidden"} absolute top-[62px] right-1 md:right-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-primary-100`}>

                </div>
                <div onMouseLeave={() => {setSettingsMenu(false)}} className={`${fix? "bg-navbar-scroll filter shadow-md backdrop:blur-lg":"bg-background"} ${settingsMenu? "flex": "hidden"} shadow-lg absolute top-14 right-0 transition-all ease-in-out flex w-40 h-auto justify-evenly items-center mt-3 rounded-md`}>
                    <ul className='justify-evenly w-full flex flex-col text-center items-center'>

                        <li className='w-full font-semibold flex justify-center items-center h-14 border-b border-slate-300 text-center text-gray-500'>
                            {t("navbar.language")}
                        </li>
                        <li className='w-full flex justify-left items-center h-14 border-b border-slate-300 text-center space-x-4'>
                            <button className='w-full text-heading flex h-full items-center space-x-3 px-7 hover:bg-gray-300' onClick={()=>i18n.changeLanguage("es")}>
                                <img className='w-6 h-6' src='https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg' alt=''></img>
                                <div className='font-medium'>{t("navbar.spanish")}</div>
                            </button>
                        </li>
                        <li className='w-full flex justify-left items-center h-14 border-b border-slate-300 text-center space-x-4'>
                            <button className='w-full text-heading flex h-full items-center space-x-3 px-7 hover:bg-gray-300' onClick={()=>i18n.changeLanguage("en")}>
                                <img className='w-6 h-6' src='https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg' alt=''></img>
                                <div className='font-medium'>{t("navbar.english")}</div>
                            </button>
                        </li>
                        
                        

                    </ul>
                </div>
            </div>
        </nav>
        
        <div className={`${fix? "bg-navbar-scroll filter shadow-md backdrop:blur-lg":"bg-background"} ${subMenu? "flex": "hidden"} fixed top-24 md:hidden transition-all ease-in-out flex w-full h-auto justify-evenly items-center mt-3 rounded-md`}>
            <ul className='justify-evenly w-full flex flex-col text-center items-center'>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/' className={`${activeLink==='/'? "text-secondary-100" : "text-heading"} hover:text-primary-100 font-semibold hover:scale-110`}>
                    {t("navbar.home")}
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/contact' className={`${activeLink==='/contact'? "text-secondary-100" : "text-heading"} hover:text-primary-100 font-semibold hover:scale-110`}>
                    {t("navbar.contact")}
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/aboutus' className={`${activeLink==='/aboutus'? "text-secondary-100" : "text-heading"} hover:text-primary-100 font-semibold hover:scale-110`}>
                    {t("navbar.aboutUs")}
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink
                    to="/download"
                    className={`md:inline-flex items-center justify-center whitespace-nowrap rounded-md border 
                            border-transparent w-full max-w-xs py-2 text-base font-medium shadow-sm uppercase transition-all 
                            ${activeLink === '/download'? "border-2 border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-white" : "bg-primary-100 text-white hover:bg-primary-200"}`}
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
