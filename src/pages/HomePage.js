import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';
import {FaTwitter, FaInstagram} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';
import VideoDisplay from '../components/VideoDisplay';
import useTranslate from '../hooks/useTranslation';

// const LazyVideoDisplay = React.lazy(() => import('../components/VideoDisplay') )



function HomePage() {

  const{ t }=useTranslate();


  return (
    <div>
        <NavBar activeLink={'/'} />
        <div className='h-[96px]'></div>
        
        <div className='hero w-full bg-background px-6 md:px-16 py-20 md:py-40 xl:px-40 3xl:px-60 flex flex-col lg:flex-row lg:items-center lg:justify-evenly'>
          <div className='w-full'>
            <div className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
             {t("home.title")} <span className='text-primary-100'>{t("home.now")}</span>
            </div>
            <p className='pr-16 max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl text-gray-500 leading-6 mt-4 lg:mt-6 md:text-lg xl:text-xl 2xl:max-w-md mb-8'>
               {t("home.h-paragraph")}
            </p>

            <NavLink
              to="#"
              className="md:inline-flex items-center lg:mt-6 justify-center whitespace-nowrap rounded-md border-2 
                        border-primary-100 px-10 py-2 text-base font-semibold text-primary-100 
                        shadow-sm hover:bg-primary-100 hover:text-white transition-all"
            >
              {t("home.readMore")}
            </NavLink>
          </div>

          <VideoDisplay />

        </div>

        



        <div className='w-full flex flex-col lg:items-center px-6 md:px-16 pb-20 md:pb-40 xl:px-40 3xl:px-60'>
          <div className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
            {t("home.team")}
          </div>

          <div className='w-full flex flex-col items-center justify-center pt-8 space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10 2xl:space-x-40 3xl:space-x-60 2xl:pt-14'>
            
            <div className='w-52 h-60 bg-primary-200 hover:scale-105 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative'>
              <div className='w-full h-4/5'>
                <img className='object-cover w-full h-full' src='https://cdn.discordapp.com/attachments/676222082601844756/1068680681292583002/Captura_de_pantalla_2023-01-27_175514.png' alt=''></img>
              </div>

              <div className='flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
                Alfonso Cambronero
              </div>

              <div className='absolute bottom-0 flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl bg-primary-100 opacity-0 hover:opacity-100 transition-all'>
                <div className='flex flex-row w-full justify-evenly'>
                <AiOutlineGithub className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                <FaTwitter className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                <FaInstagram className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                </div>
              </div>
            </div>

            <div className='w-52 h-60 bg-primary-200 hover:scale-105 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative'>
              <div className='w-full h-4/5'>
                <img className='object-cover w-full h-full' src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80' alt=''></img>
              </div>

              <div className='flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
                Carlos Trejos
              </div>

              <div className='absolute bottom-0 flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl bg-primary-100 opacity-0 hover:opacity-100 transition-all'>
                <div className='flex flex-row w-full justify-evenly'>
                <AiOutlineGithub className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                <FaTwitter className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                <FaInstagram className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                </div>
              </div>
            </div>

            <div className='w-52 h-60 bg-primary-200 hover:scale-105 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative'>
              <div className='w-full h-4/5'>
                <img className='object-cover w-full h-full' src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt=''></img>
              </div>

              <div className='flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
                Isabel Castro
              </div>

              <div className='absolute bottom-0 flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl bg-primary-100 opacity-0 hover:opacity-100 transition-all'>
                <div className='flex flex-row w-full justify-evenly'>
                <AiOutlineGithub className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                <FaTwitter className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                <FaInstagram className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-secondary-100 hover:opacity-80 cursor-pointer'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <Footer />
    </div>
    
  )
}

export default HomePage;