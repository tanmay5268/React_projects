import React from 'react'
import Button from './Button.jsx'
const Navbar = () => {
  return (
    <div className='max-w-4xl border-b border-zinc-500 py-5 justify-between mx-auto flex items-center'>
      <div className='left flex items-center'>
        <img className='' src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg' alt="Refokus Logo" />
      <div className=" mt-1 flex gap-14 ml-10 links">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
          elem.length===0 ? <span className='w-px h-5 bg-zinc-800'></span> :
          <a key={index} className='uppercase text-sm flex items-center gap-1' href="#">

            {index === 0 ? <span key={index} style={{ boxShadow: "0 0 0.25rem #00FF19", fontFamily: "'Satoshi Variable',sans-serif" }} className='inline-block w-2 h-2 bg-green-600 rounded-full '></span> : null}
            {elem}</a>
        ))}
      </div>
      </div>
        <Button title="Get Started"></Button>

    </div>
  )
}

export default Navbar
