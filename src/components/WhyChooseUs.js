import {IoStatsChartSharp,IoCardSharp} from 'react-icons/io5'
import useTranslate from '../hooks/useTranslation'

const WhyChooseUs = () => {
    
    const{t}=useTranslate();
  return (
    
    <div className={`bg-background dark:bg-backgroundNight flex flex-col w-full h-auto md:items-center px-6 md:px-16 py-20 md:py-25 xl:px-40 3xl:px-60`}>

        <div className='flex w-full text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold md:justify-center'>
            {t("download.why")}
        </div>
        <p className={`dark:text-navbar-scroll text-gray-500  max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl leading-6 mt-2 lg:mt-6 md:text-lg xl:text-lg 2xl:max-w-md text-start md:text-center `}>
           {t("download.crytography")}

        </p>

        <div className='pt-16 w-full flex flex-col  space-y-5 items-center xl:flex-row xl:space-x-5  xl:space-y-0 xl:justify-center xl:pt-10'>

          <div className={`p-5 flex flex-col items-center bg-gray-300 dark:bg-headingNight h-auto w-5/5 rounded-2xl justify-evenly max-w-md`}>
              <IoStatsChartSharp className='my-2 h-10 w-10 text-primary-200'/> 
              
              <div className='flex flex-col font-bold text-heading text-center dark:text-background'>
                {t("download.security")}
                <span className={`font-normal text-gray-500 text-justify dark:text-navbar-scroll`}>
                {t("download.privacy")}
                </span>

              </div>
          </div>

          <div className={`p-5 flex flex-col items-center bg-gray-300 dark:bg-headingNight h-auto w-5/5 rounded-2xl justify-evenly max-w-md`}>
              <IoCardSharp className='my-2 h-10 w-10 text-primary-200'/> 
              <div className='flex flex-col font-bold text-heading text-center dark:text-background'>
                {t("download.morefocus")}
                <span className={`font-normal  text-gray-500 mr-1 text-justify dark:text-navbar-scroll`}>
                {t("download.ensure")}
                </span>

              </div>
          </div>
        </div>
    </div>

  )
}

export default WhyChooseUs