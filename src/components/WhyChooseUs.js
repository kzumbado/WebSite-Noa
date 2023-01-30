
import {IoStatsChartSharp,IoCardSharp} from 'react-icons/io5'


const WhyChooseUs = () => {
  return (
    
    <div className='flex flex-col w-full h-auto md:items-center px-6 md:px-16 py-20 md:py-25 xl:px-40 3xl:px-60'>

        <div className='flex w-full text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold md:justify-center'>
            Why choose us
        </div>
        <p className='text-gray-500 max-w-xs md:max-w-sm 3xl:max-w-xl 3xl:text-2xl leading-6 mt-2 lg:mt-6 md:text-lg xl:text-lg 2xl:max-w-md text-start md:text-center '>
          cryptography to secure online transactions. Much of the interes in these unregaluted.

        </p>

        <div className='pt-4 w-full flex flex-col  space-y-5 items-center xl:flex-row xl:space-x-5  xl:space-y-0 xl:justify-center xl:pt-10'>

          <div className='py-4 flex flex-row items-center bg-gray-300 h-auto w-4/5 rounded-2xl justify-evenly max-w-lg '>
              <IoStatsChartSharp className=' -m-5 h-10 w-10 text-primary-200 '/> 
              <div className='flex flex-col font-bold'>
                Security by Default
                <span className='font-normal text-gray-500 '>
                  Enable privacy mode and app<br/>
                  locking to protect your data.
                </span>

              </div>
          </div>

          <div className='py-4 pl-3 flex flex-row  items-center bg-gray-300 h-auto w-4/5 rounded-2xl justify-evenly max-w-lg '>
              <IoCardSharp className='mr-3 h-10 w-10  text-primary-200 '/> 
              <div className='flex flex-col font-bold'>
                More focus UI
                <span className=' font-normal text-gray-500 mr-1'>
                  Enter your information ensure <br/>
                  your details safe
                  and more secure.
                </span>

              </div>
          </div>
        </div>
    </div>



  )
}

export default WhyChooseUs