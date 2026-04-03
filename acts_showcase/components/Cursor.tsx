"use client";
import { motion, useMotionValue,useSpring } from 'framer-motion'
import { useEffect } from 'react';
const Cursor = () => {
    const mouseMove={
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothMouseMove={
        x: useSpring(mouseMove.x,{stiffness:300,damping:20, mass:0.5}),
        y: useSpring(mouseMove.y,{stiffness:300,damping:20, mass:0.5})
    }
    useEffect(()=>{
        const mouseMoveHandler=(e:MouseEvent)=>{
            mouseMove.x.set(e.clientX);
            mouseMove.y.set(e.clientY);
        }
        window.addEventListener('mousemove',mouseMoveHandler);
        return ()=>{
            window.removeEventListener('mousemove',mouseMoveHandler);
        }
    })
  return (
    <motion.div
      className='pointer-events-none bg-sky-950  translate -translate-x-1/2 -translate-y-1/2 fixed z-50 h-6 w-6 rounded-full'
      style={{
        left: smoothMouseMove.x,
        top: smoothMouseMove.y,}}
    >
    </motion.div>
  )
}

export default Cursor
