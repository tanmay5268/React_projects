import React from 'react'

const Stripe = ({ url, number }) => {
    return (
        <div className=' hidden md:flex justify-between items-center w-1/6 px-3 py-5 border border-zinc-600'>
            <span><img className='' src={url} alt="logoimage" /></span>
            <span className='font-semibold'>{number}</span>
        </div>
    )
}

export default Stripe
