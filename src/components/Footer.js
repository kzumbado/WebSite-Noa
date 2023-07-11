import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import useTranslate from '../hooks/useTranslation';

function Footer() {

    const {t}=useTranslate();


  return (
    <footer className='bg-heading dark:bg-headingNight'>
        <div className='flex flex-row w-full h-auto px-6 py-10 md:px-16 xl:px-40 3xl:px-60'>

                <div className='text-orange-200 w-auto flex flex-col justify-center items-center font-semibold'>
                    <div>
                        <img
                            className='w-16 h-16'
                            src='https://firebasestorage.googleapis.com/v0/b/noa-ads.appspot.com/o/assets%2FLogos.jpg?alt=media&token=d61474ce-d750-45dc-ba88-806a996cf92f'
                            alt=''
                        ></img>
                    </div>
                    
                    <div className='text-gray-300 opacity-40 pt-1 text-sm font-light text-center'>
                        {t("footer.phrase")}
                    </div>

                    <ul className='flex flex-row space-x-3 pt-5'>
                        <li >
                            <NavLink className='border border-white rounded-full flex p-1 opacity-50 hover:opacity-90'>
                                <FaFacebookF className='w-5 h-5 md:w-6 md:h-6 text-white'/>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink className='border border-white rounded-full flex p-1 opacity-50 hover:opacity-90'>
                             <FaTwitter  className='w-5 h-5 md:w-6 md:h-6 text-white'/> 
                            </NavLink>   
                        </li>
                            
                        <li>
                        <NavLink className='border border-white rounded-full flex p-1 opacity-50 hover:opacity-90'>
                             <FaInstagram  className='w-5 h-5 md:w-6 md:h-6 text-white'/> 
                        </NavLink>    
                        </li>

                    </ul>
                </div>
            <div className='w-full md:hidden'></div>
            <ul className='w-52 md:w-full justify-start md:justify-end flex space-y-2 md:space-y-0 md:space-x-8 items-center flex-col md:flex-row md:items-start px'>
                <li>
                    <NavLink to={'/'} className='text-orange-200 uppercase text-sm md:text-base opacity-70 hover:opacity-100'>
                    {t("footer.home")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}className='text-orange-200 uppercase text-sm md:text-base opacity-70 hover:opacity-100'>
                    {t("footer.contact")}
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/aboutus'} className='text-orange-200 uppercase text-sm md:text-base opacity-70 hover:opacity-100'>
                    {t("footer.aboutUs")}
                    </NavLink>
                </li>

                </ul>
               
        </div>

                


        <div className='w-full h-auto px-6 md:px-16 xl:px-40 3xl:px-60'>
            <div className='w-full h-0.5 bg-gray-400 opacity-30'></div>
        </div>

        <div className='flex flex-row w-full text-gray-400 justify-center h-10 pt-2 px-6 md:px-16 xl:px-40 3xl:px-60 opacity-50'>
            {t("footer.rights")}
        </div>
        
    </footer>
  )
}
export default Footer;