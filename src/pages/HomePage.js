import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';
import {FaTwitter, FaInstagram} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';
import VideoDisplay from '../components/VideoDisplay';
import useTranslate from '../hooks/useTranslation';
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { database } from '../config/firebase';


 function   HomePage()  {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [news, setNews] = useState([]);
  const{ t }=useTranslate();
 
  const exampleData = [
    {
      title: "Updates Enero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageURL: "https://images.unsplash.com/photo-1678899711791-913ee743576f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      title: "Updates Febrero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageURL: "https://images.unsplash.com/photo-1679155506707-a072b305dd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
    },
    {
      title: "Updates Marzo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageURL: "https://images.unsplash.com/photo-1679153354581-c37671b0fb4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Updates Abril",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageURL: "https://images.unsplash.com/photo-1679164841386-f6897cbe0e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2120&q=80"
    },
  ]

  // const getNews=async()=>{
    
  //   const news=[];
  //   const docRef= collection(database,'posts');
  //   const docs= await getDocs(docRef);
    

  //     docs.forEach(doc=>{
  //       news.push({ ...doc.data()});
      
  //     });

  //     setNews(news);

      
   
  // }

  // useEffect(() => {
  //   getNews();
  
   
  // }, [])
  




  const changePostInfo = async() => {
    
    var element = document.getElementsByClassName("swiper-slide-active");
    const index = element[0]?.id;
    setCurrentTitle(exampleData[index]?.title);
    setCurrentDescription(exampleData[index]?.description);
  }

  const loadInitialPostInfo = async() => {
    
    setCurrentTitle(exampleData[0]?.title);
    setCurrentDescription(exampleData[0]?.description);
  }
  return (
    <div>
        <NavBar activeLink={'/'} />
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>

        <div className={`hero w-full bg-background dark:bg-backgroundNight px-6 md:px-16 py-12 md:py-32 xl:px-40 3xl:px-60 flex flex-col md:flex-row lg:items-center lg:justify-evenly`}>
          <div className='w-full'>
            <div className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
             {t("home.title")} <span className='text-primary-100'>{t("home.now")}</span>
            </div>
            <p className={`pr-16 max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl dark:text-navbar-scroll text-gray-500 leading-6 mt-4 lg:mt-6 md:text-lg xl:text-xl 2xl:max-w-md mb-8`}>
               {t("home.h-paragraph")}
            </p>

            <NavLink
              to="#"
              className="md:inline-flex items-center lg:mt-6 justify-center whitespace-nowrap rounded-md border-2 
                        border-primary-100 dark:border-primary-200 dark:hover:border-primary-100 px-10 py-2 text-base font-semibold text-primary-100 
                        shadow-sm hover:bg-primary-100 hover:text-white dark:hover:text-white transition-all dark:text-primary-200"
            >
              {t("home.readMore")}
            </NavLink>
          </div>

          <VideoDisplay />

        </div>

        <div className='w-full flex flex-col lg:flex-row bg-background dark:bg-backgroundNight py-12 md:py-32'>
          <div className='hidden md:px-16 xl:px-40 3xl:px-60 py-5 lg:flex w-2/5 xl:w-1/2 flex-col justify-center items-center'>
              <h1 className='text-center font-semibold text-2xl md:text-3xl 2xl:text-4xl py-6 text-primary-100 dark:text-primary-200'>{currentTitle}</h1>
              <p className='dark:text-navbar-scroll text-gray-500 text-justify 3xl:text-2xl md:text-lg xl:text-xl'>{currentDescription}</p>
          </div>
          <div className='w-full lg:w-3/5 xl:w-1/2 flex flex-col px-6 md:px-16 xl:pr-40 3xl:pr-60'>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@1.4": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              loop={true}
              onBeforeInit={loadInitialPostInfo}
              onSlideChangeTransitionEnd={changePostInfo}
              pagination={{
                type: "fraction"
              }}
              style={{
                "--swiper-navigation-size": "25px",
              }}
              navigation={true}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper h-96 w-full"
            >
              {
                exampleData.map((data, index) => (
                  <SwiperSlide className='w-96 bg-white' key={index} id={index}>
                    <img className='w-full h-full object-cover dark:opacity-90' src={data.imageURL} alt={data.title}></img>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='px-6 md:px-16 py-5 flex w-full lg:hidden lg:w-2/5 xl:w-1/2 flex-col'>
              <h1 className='text-center font-semibold text-2xl md:text-3xl py-2 text-primary-100 dark:text-primary-200'>{currentTitle}</h1>
              <p className='dark:text-navbar-scroll text-gray-500 text-justify 3xl:text-2xl md:text-lg xl:text-xl'>{currentDescription}</p>
          </div>
        </div>

        <div className={`bg-background dark:bg-backgroundNight w-full flex flex-col lg:items-center px-6 md:px-16 pb-20 md:pb-40 xl:px-40 3xl:px-60`}>
          <div className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
            {t("home.team")}
          </div>

          <div className={` w-full flex flex-col items-center justify-center pt-8 space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10 2xl:space-x-40 3xl:space-x-60 2xl:pt-14`}>
            
            <div className='w-52 h-60 bg-primary-200 dark:bg-backgroundNight hover:scale-105 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative'>
              <div className='w-full h-4/5 dark:opacity-90'>
                <img className='object-cover w-full h-full' src='https://cdn.discordapp.com/attachments/676222082601844756/1068680681292583002/Captura_de_pantalla_2023-01-27_175514.png' alt=''></img>
              </div>

              <div className='flex bg-primary-200 flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
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

            <div className='w-52 h-60 bg-primary-200 dark:bg-backgroundNight hover:scale-105 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative'>
              <div className='w-full h-4/5 dark:opacity-80'>
                <img className='object-cover w-full h-full' src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80' alt=''></img>
              </div>

              <div className='flex bg-primary-200 flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
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

            <div className='w-52 h-60 bg-primary-200 dark:bg-backgroundNight hover:scale-105 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative'>
              <div className='w-full h-4/5 dark:opacity-80'>
                <img className='object-cover w-full h-full' src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt=''></img>
              </div>

              <div className='flex bg-primary-200 flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
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