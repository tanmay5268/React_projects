import React from 'react'
import Stripe from './Stripe.jsx'
const Stripes = () => {
    var data = [
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
            number: 52,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
            number: 52,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
            number: 52,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
            number: 52,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
            number: 52,
        },
        {
            url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
            number: 52,
        },
    ];
    return (
        <div className='flex items-center mt-20 justify-between'>
            {data.map((item, index) => {
                return <Stripe  key={index} url={item.url} number={item.number} />
            })
            }
        </div>
    );
}


export default Stripes
