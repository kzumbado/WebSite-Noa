import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';

function MemberCard(props) {
  const [hoverCard, setHoverCard] = useState(false);
  return (
    <div
      onMouseOver={() => (setHoverCard(true))}
      onMouseOut={() => (setHoverCard(false))}
      className={`w-52 h-60 lg:w-60 lg:h-72 2xl:w-72 2xl:h-80 relative my-10 mx-10 3xl:mx-32 overflow-hidden ${hoverCard? 'bg-black' : 'bg-primary-200'}`}
    >
      <div className={`w-full h-4/5 ${hoverCard? 'opacity-50 scale-105 transition-all duration-300' : 'opacity-100'}`}>
        <img className='object-cover w-full h-full' src={ props.image } alt={ props.name }></img>
      </div>

      <div className='flex bg-primary-200 flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl'>
        { props.name }
      </div>

      <div className={`absolute w-auto text-center text-white font-semibold xl:text-xl z-20 top-0 bottom-0 left-0 right-0 mx-auto my-auto h-10 pointer-events-none ${hoverCard? 'block transition-all duration-500': 'hidden'}`}>
      { props.position }
      </div>

      <div
        className={`absolute bottom-0 flex flex-row w-full h-1/5 items-center justify-center text-white font-semibold xl:text-xl bg-primary-200 ${hoverCard? 'opacity-100': 'opacity-0'}`}
      >
        <div className='flex flex-row w-full justify-evenly'>
          <a href={ props.github } target='_blank' rel="noreferrer">
            <AiOutlineGithub className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer' title='GitHub' />
          </a>
          <a href={ props.linkedin } target='_blank' rel="noreferrer">
            <FaLinkedin className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer' title='LinkedIn'/>
          </a> 
        </div>
      </div>
    </div>
  )
}

export default MemberCard;