import React, {useState} from 'react';

const VideoDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);

  const alreadyLoaded = () => {
    setIsLoading(false)
  }
  return (
    <div className='flex items-start w-full justify-center lg:justify-end mt-20 lg:mt-0 dark:opacity-90'>
        <div className={`w-5/6 md:w-full max-w-[400px] lg:max-w-[682px] relative`}>
          <iframe onLoad={alreadyLoaded} loading="lazy" className='w-full h-60 lg:h-96 flex justify-end object-cover' title="vimeo-player" src="https://player.vimeo.com/video/783453158?h=bca8b328e2?&background=1" frameBorder="0" allowFullScreen>
          </iframe>
          {isLoading&&<div className={`flex w-20 items-center `}>
              <div className="absolute top-0 bottom-0 m-auto left-0 right-0 flex items-center justify-center p-10 ">
                  <div className="w-20 h-20 border-t-4 border-b-4 border-primary-100 rounded-full animate-spin bg-overlay ring-8 ring-overlay"></div>
              </div>
          </div>}
        </div>
    </div>
  )
}

export default VideoDisplay