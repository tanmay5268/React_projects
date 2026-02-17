const Subscribe = () => {
    return (
        <div style={{backgroundImage:`url('https://www.reconnectwithnature.org/assets/dist/images/newsletter-bg.jpg')`}} className='flex flex-col items-center justify-center w-full h-110 bg-[#0E6A5B] '>
            <h1 style={{fontFamily:'Cabin'}} className='text-5xl text-white mt-4 mb-2 font-bold'>Subscribe to our Newsletter</h1>
            <p className='text-white px-40 mb-4'>The Compass is full of District news and general interest nature stories, while Get Going highlights the must-do programs for the coming week. Flock and Feather is for all the birdwatchers out there and Willy's Wild Files inspires kids to embrace nature. </p>
            <div className='flex hover:text-[#FFD140] hover:bg-[#0C6B5B] transition duration-300 text-[#0C6B5B] cursor-pointer bg-[#FFD140] px-6 py-4'>
                <h1 className='h-full  transition duration-300  w-full font-extrabold mx-4' >Subscribe Now</h1>
            </div>
        </div>
    )
}

export default Subscribe
