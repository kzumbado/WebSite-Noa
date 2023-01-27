import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <NavBar />
        <div className='h-[96px]'></div>
        
        <div className='hero w-full bg-white px-6 md:px-16 py-20 md:py-40 xl:px-40 3xl:px-60'>
          <div className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
            El futuro de los comercios. <span className='text-primary-100'>Ahora.</span>
          </div>
          <p className='pr-16 max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl text-heading leading-6 mt-4 lg:mt-6 md:text-lg xl:text-xl 2xl:max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>

          <NavLink
            to="#"
            className="hidden md:inline-flex items-center mt-4 lg:mt-6 justify-center whitespace-nowrap rounded-md border-2 
                      border-primary-100 px-10 py-2 text-base font-semibold text-primary-100 
                      shadow-sm hover:bg-primary-100 hover:text-white transition-all"
          >
            Leer más
          </NavLink>
        </div>

        <Footer />
    </div>
    
  )
}

export default HomePage;