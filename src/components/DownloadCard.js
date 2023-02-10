import {FaGooglePlay, FaApple} from 'react-icons/fa';
import useTranslate from '../hooks/useTranslation';

const DownloadCard = () => {
   
    const {t}=useTranslate();

  return (

    <div className={`bg-background dark:bg-backgroundNight items-center flex flex-col w-full h-auto md:flex-row md:justify-center px-6 md:px-16 py-20 md:py-30 xl:px-40 3xl:px-60`} >


        <div className="w-full h-autoflex flex-col items-center">
            <div className='w-full text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] font-bold bg-gradient-to-bl from-primary-100 via-primary-200 to-secondary-100 text-transparent bg-clip-text'>
                {t("download.title")}

            </div> <p className={`max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl dark:text-navbar-scroll text-gray-500 leading-6 mt-2 lg:mt-7 md:text-lg xl:text-lg 2xl:max-w-md text-start`}>
            {t("download.paragraph")}
            </p>      

            <div className="flex flex-row w-full h-[90px] space-x-4 items-center ">
                <a  href="/">
                    <div className="flex flex-row w-32 xl:w-36 h-[40px] xl:h-[44px] bg-black rounded-lg items-center px-1 hover:bg-gray-800">
                        <FaApple className="px-1 w-7 h-7 text-white xl:h-8 xl:w-8"/>
                        <div className="pl-1  flex flex-col text-[10px] text-white xl:text-[12px]">
                        {t("download.appStore")}
                            <span className="text-base -mt-1">
                            AppStore
                            </span>
                        </div>
                    </div>
                </a>

                <a  href="/">
                    <div className="flex flex-row w-32 xl:w-36 h-[40px] xl:h-[44px] bg-black rounded-lg items-center px-1 hover:bg-gray-800">
                        <FaGooglePlay className="px-1 w-7 h-7 text-white xl:h-8 xl:w-8"/>
                        <div className="flex flex-col text-[10px] text-white xl:text-[12px]">
                            {t("download.Google")}
                            <span className="text-base -mt-1">
                            Google Play
                            </span>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>

        <div className={`w-full flex justify-center md:justify-end mt-6`}>
            <div className="bg-gradient-to-bl from-primary-100 via-primary-200 to-secondary-100 h-auto w-2/3 max-w-lg rounded-3xl flex justify-center ">
                <img className='h-auto w-full'  src='https://claroperupoc.vtexassets.com/arquivos/ids/318338/Apple-iPhone-11-Negro--2-.png?v=638007807583700000' alt='iphone'/>
            </div>
        </div>

    </div>


  )
}

export default DownloadCard