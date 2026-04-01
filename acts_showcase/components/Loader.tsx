"use client";
import { useLoading } from "@/context/LoadingContext";
import { gsap, CSSPlugin } from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CSSPlugin);
const Loader = () => {
    const { isLoaded, markAsLoaded } = useLoading();
    const hasLoaded = isLoaded();
    const [counter, setCounter] = useState(hasLoaded ? 100 : 0);
    const [showLoading, setShowLoading] = useState(!hasLoaded);

    useEffect(() => {
        // Skip counter animation if already loaded once
        if (isLoaded()) return;

        const count = setInterval(() => {
            setCounter((counter) => {
                if (counter < 100) {
                    return counter + 1;
                }
                else {
                    clearInterval(count)
                    return 100;
                }
            });
        }, 20);

        return () => clearInterval(count);
    });
    useEffect(() => {
        // Skip text animation if already loaded
        if (isLoaded()) return;

        const tl = gsap.timeline();
        tl.to('.acts > div', {
            color: "#8466F3",
            duration: 1,
            stagger: 0.3,
            delay: 0.3,
            ease: "power2.inOut",
        })
    } )
    useGSAP(() => {
        // Skip loading animation if already loaded
        if (isLoaded()) return;

        if (counter === 100) {
            const tl = gsap.timeline();
            tl.to(".loading-container", { width: 0, duration: 1, ease: "power1.inOut" })
            tl.to(".stairs > div", { y: '-100%', duration: 0.5, stagger: 0.05, ease: "power3.inOut" })
            tl.to(".loading-container", { display: "none" })
            tl.to(".stairs > div", { display: "none" })

            tl.to(".main-content", { opacity: 1, duration: 1, delay: -2, ease: "power2.inOut" })
            tl.call(() => {
                markAsLoaded();
                setShowLoading(false);
            })
        }
    }, [counter])
    return (
        <div className="absolute top-0 left-0 z-100">
            {/* loading */}
            {showLoading && <div className="loading-container pointer-events-none flex flex-row-reverse overflow-hidden z-10 absolute w-screen h-screen bg-[#120321]">
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
            </div>}

            {/* stairs for */}
            {showLoading && <div className="stairs max-sm:hidden absolute z-9 flex pointer-events-none w-screen h-screen">
                <div className="h-full flex-1 bg-indigo-400"></div>
                <div className="h-full flex-1 bg-indigo-400"></div>
                <div className="h-full flex-1 bg-indigo-400"></div>
                <div className="h-full flex-1 bg-indigo-400"></div>
                <div className="h-full flex-1 bg-indigo-400"></div>
                <div className="h-full flex-1 bg-indigo-400"></div>
                {/* add gradient later */}
            </div>}
            {/* transition for mobile */}
            {showLoading && <div className="md:hidden absolute z-9 w-screen h-screen">
                <div className="w-full h-full bg-[#83A6EA]"></div>
            </div>}
            {/* main content */}
        </div>
    )
}

export default Loader
