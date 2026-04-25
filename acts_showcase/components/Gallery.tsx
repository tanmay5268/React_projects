"use client";
import React from 'react'
import h1 from "@/public/h1.png"
import Masonry from './Masonry';

const Gallery = () => {
    const items = [
        {
            id: "1",
            img: h1.src,
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "2",
            img: "https://drive.google.com/thumbnail?id=1I_a_9_nAepD0nPEASIGd5ImoYyijRzWZ&sz=w800",
            url: "https://example.com/two",
            height: 250,
        },
        {
            id: "3",
            img: "https://drive.google.com/thumbnail?id=1ABzL-7fqD7mNHUICuFdP_sP3zsoanZCW&sz=w800",
            url: "https://example.com/three",
            height: 600,
        },
        {
            id: "4",
            img: "https://drive.google.com/thumbnail?id=1-kWF87ACsojRzJLuCtaFIjXqLq8rJ9Fs&sz=w800",
            url: "https://example.com/four",
            height: 350,
        }
        ,
        {
            id: "5",
            img: "https://drive.google.com/thumbnail?id=1EizVwrwlB8_t_XPpwy63KyhoiJo6CG_e&sz=w800",
            url: "https://example.com/five",
            height: 450,
        }
        ,
        {
            id: "6",
            img: "https://drive.google.com/thumbnail?id=1EizVwrwlB8_t_XPpwy63KyhoiJo6CG_e&sz=w800",
            url: "https://example.com/six",
            height: 450,
        }
        ,
        {
            id: "7",
            img: "https://drive.google.com/thumbnail?id=1EizVwrwlB8_t_XPpwy63KyhoiJo6CG_e&sz=w800",
            url: "https://example.com/seven",
            height: 450,
        }
        ,
        {
            id: "8",
            img: "https://drive.google.com/thumbnail?id=1EizVwrwlB8_t_XPpwy63KyhoiJo6CG_e&sz=w800",
            url: "https://example.com/eight",
            height: 450,
        }
        ,
        {
            id: "9",
            img: "https://drive.google.com/thumbnail?id=1EizVwrwlB8_t_XPpwy63KyhoiJo6CG_e&sz=w800",
            url: "https://example.com/nine",
            height: 450,
        }
        ,
        {
            id: "10",
            img: "https://drive.google.com/thumbnail?id=1EizVwrwlB8_t_XPpwy63KyhoiJo6CG_e&sz=w800",
            url: "https://example.com/ten",
            height: 450,
        }

        // ... more items
    ];

    return (
        <div className='flex items-center justify-center'>
            <div className='text-white w-5/6 h-auto py-20'>
            {/* <Masonry items={items}
                ease="elastic.out"
                duration={0.6}
                stagger={0.14}
                animateFrom="right"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover>
            </Masonry> */}
        </div>
        </div>

    )
}

export default Gallery
