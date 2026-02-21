import gsap from "gsap"

import { useGSAP } from '@gsap/react'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const barRef = useRef<HTMLDivElement>(null);
    useGSAP(function () {
        const tl = gsap.timeline();

        tl.to(barRef.current, {
            display: 'flex'
        })
        tl.to('.bar', {
            height: 0,
            delay: 5,
            stagger: {
                amount: 0.5
            }
        })
    })
    return (
        <div className="bg-[#0d0313] z-0 relative w-screen h-screen overflow-hidden">
            {/* preloader */}
            {/* <div ref={counterRef} className= "pointer-events-none cursor-e counter absolute z-2 h-full w-full bg-amber-300">
            couter
        </div> */}
            <div ref={barRef} className="pointer-events-none bar-container absolute w-full h-full flex z-1">
                <div className="bar  bg-[#0d0313] w-1/6"></div>
                <div className="bar  bg-[#0d0313] w-1/6"></div>
                <div className="bar  bg-[#0d0313] w-1/6"></div>
                <div className="bar  bg-[#0d0313] w-1/6"></div>
                <div className="bar  bg-[#0d0313] w-1/6"></div>
                <div className="bar  bg-[#0d0313] w-1/6"></div>
                <div className="bar  bg-[#0d0313] w-1/6"></div>

            </div>
            <button onClick={() => navigate("/transition")} type="button"> other page</button>
            <div className="flex">
                <img className="w-1/2 h-full" src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className="w-1/2 h-full" src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

        </div>
    )
}

export default Home
