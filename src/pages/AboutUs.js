import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useTranslate from '../hooks/useTranslation';

function AboutUs() {
    const{t}=useTranslate();

    return (
        <div>
            <NavBar activeLink={'/aboutus'} />
            <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>
            
            <div className={`bg-background dark:bg-backgroundNight w-full px-6 md:px-16 py-20 md:py-40 xl:px-40 3xl:px-60 flex flex-col space-y-10 xl:space-y-20 3xl:space-y-40`}>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-primary-200'>{t("aboutUs.we")}</div>
                    <div className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-primary-100'>NOA</div>

                </div>

                <div className='w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row'>
                    <div className='w-full flex flex-col'>
                        <div className= {`text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light dark:text-background text-heading mb-5`}>{t("aboutUs.history")}</div>
                        <div className={`text-lg xl:text-xl 3xl:text-2xl font-light dark:text-navbar-scroll text-gray-500 lg:max-w-sm xl:max-w-md 2xl:max-w-lg 3xl:max-w-4xl`}>
                            {t("aboutUs.h-paragraph")}
                            {/* <span className={`${readMoreHistory? "hidden" : "inline"}`}>..</span>
                            <span className={`${readMoreHistory? "inline" : "hidden"}`}>
                            <br/></span>
                            <button onClick={() => {setReadMoreHistory(!readMoreHistory)}} className='text-primary-200 inline ml-1'>{readMoreHistory? t("aboutUs.hide") : t("aboutUs.show")}</button> */}
                        </div>
                    </div>
                    
                    <div className='w-full dark:opacity-80'>
                        <img src='https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' alt=''></img>
                    </div>
                </div>

                <div className='w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row'>
                    <div className='w-1/2 hidden lg:block dark:opacity-80'>
                        <img src='https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''></img>
                    </div>

                    <div className='w-20 hidden lg:block'>

                    </div>

                    <div className='w-full flex flex-col lg:w-2/5'>
                        <div className={`text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light dark:text-background text-heading mb-5`}>{t("aboutUs.vision")}</div>
                        <div className={`text-lg xl:text-xl 3xl:text-2xl font-light dark:text-navbar-scroll text-gray-500 lg:max-w-sm xl:max-w-md 2xl:max-w-lg 3xl:max-w-4xl`}>
                            {t("aboutUs.v-paragraph")}
                            {/* <span className={`${readMoreVision? "inline" : "hidden"}`}>
                            <br/></span>
                            <button onClick={() => {setReadMoreVision(!readMoreVision)}} className='text-primary-200 inline ml-1'>{readMoreVision? t("aboutUs.hide") : t("aboutUs.show")}</button> */}
                        </div>
                    </div>
                    
                    <div className='w-full lg:hidden dark:opacity-80'>
                        <img src='https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''></img>
                    </div>
                </div>

                <div className='w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row'>
                    <div className='w-full flex flex-col'>
                        <div className={`text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light dark:text-background text-heading mb-5`}>{t("aboutUs.mission")}</div>
                        <div className={`text-lg xl:text-xl 3xl:text-2xl font-light dark:text-navbar-scroll text-gray-500 lg:max-w-sm xl:max-w-md 2xl:max-w-lg 3xl:max-w-4xl`}>
                            {t("aboutUs.m-paragraph")}
                            {/* <span className={`${readMoreMision? "hidden" : "inline"}`}>..</span>
                            <span className={`${readMoreMision? "inline" : "hidden"}`}>
                            <br/></span>
                            <button onClick={() => {setReadMoreMision(!readMoreMision)}} className='text-primary-200 inline ml-1'>{readMoreMision? t("aboutUs.hide") : t("aboutUs.show")}</button> */}
                        </div>
                    </div>
                    
                    <div className='w-full dark:opacity-80'>
                        <img src='https://images.unsplash.com/photo-1515569254463-c595e931731b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''></img>
                    </div>
                </div>
                
            </div>

            <Footer />
        </div>
    )
}

export default AboutUs;