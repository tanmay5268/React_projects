import React from 'react'
import Button from './Button.jsx'
const Product = ({title,description,live,caseProp }) => {
    return (
        <div className='w-full py-10 text-white'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                <h1 className=' text-7xl'>
                    {title}
                </h1>
                <div className='dets w-1/3'>
                    <p className='mb-10'>{description}</p>
                    <div className='flex items-center gap-5 justify-start'>
                        {live ? <Button title="View Live"></Button> : null}
                        {caseProp ? <Button title="Case Study"></Button> : null}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product
