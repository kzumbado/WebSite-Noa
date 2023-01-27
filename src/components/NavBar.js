import React, {useState} from 'react';
import {HiOutlineBars3BottomLeft} from 'react-icons/hi2';
import {MdClose} from 'react-icons/md';
import {NavLink} from 'react-router-dom';

function NavBar() {
    const [subMenu, setSubMenu] = useState(false);
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
        <nav className={`w-full h-auto py-7 ${fix? "bg-navbar-scroll border-b filter border-navbar-border-scroll shadow-md backdrop:blur-lg":"bg-white"} fixed  flex flex-row items-center px-6 md:px-16 xl:px-40 3xl:px-60`}>

            <div className='text-lg font-semibold md:font-bold md:text-2xl text-heading'>
                LOGO
            </div>
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

            <ul className='hidden justify-end md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 w-full'>

                <li>
                    <NavLink to='/' className='transition-all text-heading text-lg font-medium hover:text-primary-100 hover:border-b-2 border-secondary-100 uppercase'>
                        Inicio
                    </NavLink>
                </li>
                <li>
                <NavLink to='#' className='transition-all text-heading text-lg font-medium hover:text-primary-100 hover:border-b-2 border-secondary-100 uppercase'>
                        Contacto
                    </NavLink>
                </li>

                <li>
                <NavLink to='#' className='transition-all text-heading text-lg font-medium hover:text-primary-100 hover:border-b-2 border-secondary-100 uppercase'>
                        Nosotros
                    </NavLink>
                </li>

            </ul>
            
            <NavLink
                to="#"
                className="hidden md:inline-flex ml-8 md:ml-10 items-center justify-center whitespace-nowrap rounded-md border 
                          border-transparent bg-primary-100 px-6 py-2 text-base font-medium text-white 
                          shadow-sm hover:bg-primary-200 uppercase transition-all"
              >
                Descargar
              </NavLink>

        </nav>
        
        <div className={`${fix? "bg-navbar-scroll filter shadow-md backdrop:blur-lg":"bg-white"} ${subMenu? "flex": "hidden"} fixed top-20 md:hidden transition-all ease-in-out flex w-full h-auto justify-evenly items-center mt-3 rounded-md`}>
            <ul className='justify-evenly w-full flex flex-col text-center items-center'>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='/' className='text-heading hover:text-primary-100 font-semibold hover:scale-110'>
                    Inicio
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='#' className='text-heading hover:text-primary-100 font-semibold hover:scale-110'>
                    Contacto
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                    <NavLink to='#' className='text-heading hover:text-primary-100 font-semibold hover:scale-110'>
                    Nosotros
                    </NavLink>
                </li>

                <li className='w-full flex justify-center items-center h-14 border-b border-slate-300 text-center uppercase'>
                <NavLink
                    to="#"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border 
                            border-transparent bg-primary-100 w-full max-w-xs py-2 text-base font-medium text-white 
                            shadow-sm hover:bg-primary-200 uppercase"
                >
                    Descargar
                </NavLink>
                </li>

            </ul>
        </div>
        
        </div>
    )
}

export default NavBar;
