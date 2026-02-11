import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl flex flex-col md:flex md:flex-row gap-10 py-25 mb-30 mx-auto w-full h-10 '>
                <div className='basis-1/2'>
                    <h1 className=' relative pr-30 text-[9rem] font-semibold leading-none tracking-tight'>Refokus.</h1>
                </div>
                <div className='basis-1/2 flex flex-col md:flex md:flex-row gap-4'>
                    <div className='basis-1/3' >
                        <h4 className='mb-7 '>Socials</h4>
                        {['Instagram', 'Twitter', 'LinkedIn'].map((item, index) => (
                            <p className='capitalize block  mb-2  text-zinc-600' key={index}>{item}</p>
                        ))}
                    </div>
                    <div className='basis-1/3' >
                        <h4 className='mb-7 '>Company</h4>
                        {['About', 'Careers', 'Contact'].map((item, index) => (
                            <p className='capitalize block  mb-2  text-zinc-600' key={index}>{item}</p>
                        ))}
                    </div>
                    <div className='basis-1/3 max-md:mr-10 items-end flex flex-col gap-1' >
                    <p className='md:text-right max-w-xs -mt-5'> Refokus is pioneering digital agency driven by design and
                        empowered by technology.</p>
                        <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className='w-30 mt-10 h-auto'  />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer
