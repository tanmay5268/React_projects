import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title="Get Started"}) => {
    return (
        <div className='max-w-40 text-center bg-zinc-100 px-5 flex items-center justify-between py-2 rounded-full text-black cursor-pointer'>
            <span className='text-sm font-semibold'>{title}</span>
            <IoIosReturnRight className='inline-block text-lg' />
        </div>
    )
}

export default Button
