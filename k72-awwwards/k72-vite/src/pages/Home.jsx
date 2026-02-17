import React from 'react'
import Video from '../components/Home/Video'
import Homehero from '../components/Home/Homehero'
import Homebottom from '../components/Home/Homebottom'
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
  window.Shery.mouseFollower({
    skew: true,
    duration: 1,
  });
}, []);

    return (
        <div>
            <div className='h-screen w-screen fixed overflow-hidden'>
                <Video />
            </div>
            <div className=' flex flex-col justify-between h-screen w-screen relative'>
                <Homehero></Homehero>
                <Homebottom></Homebottom>
            </div>
        </div>
    )
}

export default Home
