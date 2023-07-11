import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import {NavLink} from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
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
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNews } from '../store/news/thunks';

 function  HomePage()  {

  const dispatch= useDispatch();
  const {posts ,isLoading}= useSelector(state=>state.news);


  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const{ t }=useTranslate();
  
  useEffect(() => {
    
    dispatch(startLoadingNews());
    
  }, [dispatch])
  

  const changePostInfo = () => {
    
    var element = document.getElementsByClassName("swiper-slide-active");
    const index = element[0]?.id;
     setCurrentTitle(posts[index]?.title);
     setCurrentDescription(posts[index]?.description);
  }

  const loadInitialPostInfo = () => {
     
     setCurrentTitle(posts[0]?.title);
     setCurrentDescription(posts[0]?.description);
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
              to="download"
              className="md:inline-flex items-center lg:mt-6 justify-center whitespace-nowrap rounded-md border-2 
                        border-primary-100 dark:border-primary-200 dark:hover:border-primary-100 px-10 py-2 text-base font-semibold text-primary-100 
                        shadow-sm hover:bg-primary-100 hover:text-white dark:hover:text-white transition-all dark:text-primary-200"
            >
              {t("home.readMore")}
            </NavLink>
          </div>

          <VideoDisplay />

        </div>

        {posts[0]?.id&&<div className='w-full flex flex-col lg:flex-row bg-background dark:bg-backgroundNight py-12 md:py-32'>
          <div className='hidden md:px-16 xl:px-40 3xl:px-60 py-5 lg:flex w-2/5 xl:w-1/2 flex-col justify-center items-center'>
              <h1 className='text-center font-semibold text-2xl md:text-3xl 2xl:text-4xl py-6 text-primary-100 dark:text-primary-200'>{currentTitle}</h1>
              <p className='dark:text-navbar-scroll text-gray-500 text-justify 3xl:text-2xl md:text-lg xl:text-xl'>{currentDescription}</p>
          </div>
          <div className='w-full lg:w-3/5 xl:w-1/2 flex flex-col px-6 md:px-16 xl:pr-40 3xl:pr-60'>

            { (isLoading)
              ?<p>Cargando Noticias...</p>
             :<Swiper
              slidesPerView={1}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@1.4": {
                  slidesPerView: 1,
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
              className="mySwiper h-[400px] w-full"
            >
              {
                posts.map((data, index) => (
                  <SwiperSlide className='w-80 bg-transparent' key={data.id} id={index}>
                    <img className='object-cover w-full dark:opacity-90' src={data.imageURL} alt={data.title}></img>
                  </SwiperSlide>
                ))
              }
            </Swiper>
              }
          </div>
          <div className='px-6 md:px-16 py-5 flex w-full lg:hidden lg:w-2/5 xl:w-1/2 flex-col'>
              <h1 className='text-center font-semibold text-2xl md:text-3xl py-2 text-primary-100 dark:text-primary-200'>{currentTitle}</h1>
              <p className='dark:text-navbar-scroll text-gray-500 text-justify 3xl:text-2xl md:text-lg xl:text-xl'>{currentDescription}</p>
          </div>
        </div>}

        <div className={`bg-background dark:bg-backgroundNight w-full flex flex-col lg:items-center px-6 md:px-16 pb-20 md:pb-40 xl:px-40 3xl:px-60`}>
          <div className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
            {t("home.team")}
          </div>

          <div className={` w-full flex flex-wrap items-center justify-center pt-8 lg:flex-wrap 2xl:pt-14`}>
            
            <MemberCard
              name="Bryan Díaz"
              image="https://firebasestorage.googleapis.com/v0/b/noa-ads.appspot.com/o/memberProfiles%2FProfile_bryan.png?alt=media&token=2b4e61ca-ac90-4f3c-b768-0cd387955e96"
              position="CEO"
              github="https://github.com/brydiaz"
              linkedin="https://www.linkedin.com/in/bryan-andrey-d%C3%ADaz-barrientos-655309218"
            />

            <MemberCard
              name="Raychell Arguedas"
              image="https://firebasestorage.googleapis.com/v0/b/noa-ads.appspot.com/o/memberProfiles%2Fphoto_4965239403043728431_y.jpg?alt=media&token=fe056e74-e8c5-4701-9a74-db46a139841b"
              position="COO"
              github="https://github.com/arguedas03"
              linkedin="https://www.linkedin.com/in/raychell-valeria-arguedas-bolivar-b7523a203"
            />

            <MemberCard
              name="Kevin Zumbado"
              image="https://firebasestorage.googleapis.com/v0/b/noa-ads.appspot.com/o/memberProfiles%2FIMG_1311.JPG?alt=media&token=ae26f4f3-9adf-416a-95ae-78e0576d8b1c"
              position="CTO"
              github="https://github.com/kzumbado"
              linkedin="https://www.linkedin.com/in/kevin-zumbado-cruz-217ba1254"
            />

            <MemberCard
              name="Andres López"
              image="https://firebasestorage.googleapis.com/v0/b/noa-ads.appspot.com/o/memberProfiles%2Fphoto_4965624910718282538_y.jpg?alt=media&token=a392fdfa-1255-4c80-9a89-6d52cdff8e6a"
              position="VP of Operations"
              github="https://github.com/andres016"
              linkedin="https://www.linkedin.com/in/andres-lopez-599432198"
            />

            <MemberCard
              name="Fernando Ugalde"
              image="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              position="Chief Software Engineer"
              github="https://github.com/fernandoug"
              linkedin="#"
            />

            <MemberCard
              name="Jailine González"
              image="https://firebasestorage.googleapis.com/v0/b/noa-ads.appspot.com/o/memberProfiles%2Fphoto_4954517210462792705_y.jpg?alt=media&token=c9253e4f-2f0f-4349-b175-63eec554e700"
              position="Chief Software Engineer"
              github="https://github.com/flickerjai"
              linkedin="https://www.linkedin.com/in/jailine-gonz%C3%A1lez-g%C3%B3mez-239aa08a?trk=contact-info"
            />

          </div>
        </div>
      <Footer />
    </div>
    
  )
}

export default HomePage;