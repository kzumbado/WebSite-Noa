import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'


const DownloadCard = () => {
  return (

    <div className='py-5 items-center flex flex-col w-full h-auto md:flex-row bg-red-500 md:justify-center' >


        <div className="w-auto h-autoflex flex-col bg-white items-center ">
            <div className='pl-4 w-full text-4xl md:text-5xl xl:text-6xl 2xl:text-4xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-100 font-bold '>
             The world's<br/> 
             most powerful<br/> 
            crypto app
            </div>
            <p className="max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl text-gray-500 leading-6 mt-2 lg:mt-6 md:text-lg xl:text-lg 2xl:max-w-md text-start">
            Tempor tempor exercitation proident id exercitation consequat aliqua. Commodo irure ad incididunt sit tempor. 
            </p>      

            <div className=" pl-10 flex flex-row w-full h-[90px] space-x-4 items-center ">
                <a  href="/">
                <div className="flex flex-row w-32 h-[40px] bg-black rounded-lg">
                    <AiFillApple className="w-9 h-9 text-white"/>
                    <div className="pl-1  flex flex-col text-[10px] text-white">
                        Download on the
                        <span className="text-base">
                            AppStore
                        </span>
                    </div>
                </div>
                </a>

                <a  href="/">
                    <div className="flex flex-row w-32 h-[40px] bg-black rounded-lg">
                        <FaGooglePlay className="pt-2 pl-1 w-7 h-7 text-white"/>
                        <div className="flex flex-col text-[10px] text-white">
                             Get it on
                            <span className="text-base">
                            Google Play
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="bg-slate-900 h-auto w-fit rounded ">

            <img className='px-4 py-4 h-80 w-80'  src='https://toppng.com/uploads/preview/download-draw-a-iphone-x-11563139760oc1vgqtfgw.png'/>
           

        </div>
    







    </div>


  )
}

export default DownloadCard