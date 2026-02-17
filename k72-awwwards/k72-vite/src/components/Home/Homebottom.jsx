import React from 'react'
import { Link } from 'react-router-dom'
const Homebottom = () => {
  return (
    <div className=' mb-5 font-[font1] text-white flex justify-center items-center gap-[7vw]'>
        <Link className='hover:text-[#82BCE7] hover:border-[#82BCE7] flex justify-center items-center  text-[4.5vw] border-2 rounded-full px-4 pt-2 leading-none border-white uppercase text-center ' to="/aboutus"><div className=''>About Us</div></Link>
       <Link className='hover:text-[#82BCE7] hover:border-[#82BCE7] flex justify-center items-center  text-[4.5vw] border-2 rounded-full px-4 pt-2 leading-none border-white uppercase text-center ' to="/events"><div className=''>Events</div></Link>
    </div>
  )
}

export default Homebottom
