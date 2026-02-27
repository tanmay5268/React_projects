import { useLoading } from "../Context/LoadingContext";
import '../styles/carousel.css'
import { gsap, CSSPlugin } from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(CSSPlugin);
// import useGsap from "@gsap/react";
// import GridMotion from "@/components/GridMotion";
const Home = () => {
    const width = window.innerWidth;
    const { setLoading } = useLoading();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((counter) => {
                if (counter < 100) {
                    return counter + 1;
                }
                else {
                    clearInterval(count)
                    return 100;
                }
            }
            );
        }, 45);
    }, []);
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.acts > div', {
            color: "#8466F3",
            duration: 1,
            stagger: 0.3,
            delay: 0.3,
            ease: "power2.inOut",
        })
        console.log(width);

    })
    useGSAP(() => {
        if (counter === 100) {
            const tl = gsap.timeline();
            tl.to(".loading-container", { width: 0, duration: 1, ease: "power1.inOut"})
            tl.to(".stairs > div", { y: '-100%', duration: 0.5, stagger: 0.08, ease: "power2.inOut" })
            tl.to(".loading-container", { display: "none" })
            tl.to(".stairs > div", { display: "none" })

            tl.to(".main-content", { opacity: 1, duration: 1,delay:-2, ease: "power2.inOut" })
            tl.call(() => setLoading(false))
        }
    }, [counter])
    return (
        <div className="relative">
            {/* loading */}
            <div className="loading-container pointer-events-none flex flex-row-reverse overflow-hidden z-10 absolute w-screen h-screen bg-black">
                <div className=" absolute left-0 ml-10 mt-5 font-[Rockstar] text-white">
                    <div className="max-sm:text-[40vw]  md:text-[10vw] acts leading-none flex ">
                        <div className="">A</div>
                        <div className="">C</div>
                        <div className="">T</div>
                        <div className="">S</div>
                    </div>
                </div>
                <div className="loading-text text-[#8466F3] text-9xl mr-10  font-[Rockstar] flex items-end justify-end">
                    <div className="mr-10">{counter}%</div>
                </div>
            </div>
            {/* stairs for */}
            <div className="stairs max-sm:hidden  absolute z-9 flex items-center pointer-events-none justify-center w-screen h-screen ">
                <div className=" h-full w-1/8 bg-[#82BEE7]"></div>
                <div className=" h-full w-1/8 bg-[#82B6E8]"></div>
                <div className=" h-full w-1/8 bg-[#83A6EA]"></div>
                <div className=" h-full w-1/8 bg-[#8393ED]"></div>
                <div className=" h-full w-1/8 bg-[#8466F3]"></div>
                <div className=" h-full w-1/8 bg-[#8450F2]"></div>
                <div className=" h-full w-1/8 bg-[#8439F1]"></div>
                <div className=" h-full w-1/8 bg-[#8420F0]"></div>
                {/* add gradient later */}
            </div>
            {/* transition for mobile */}
            <div className="md:hidden absolute z-9 w-screen h-screen">
                    <div className="w-full h-full bg-[#83A6EA]"></div>
            </div>
            {/* main content */}
            <div className=" w-screen h-screen flex items-center justify-center">
                <div className=" w-10 h-10  bg-red-900 ">
                    
            </div>
            </div>

        </div>
    )
}

export default Home
