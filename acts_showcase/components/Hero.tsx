"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ShinyText from "./ShinyText";
import { useLoading } from "@/context/LoadingContext";
const HERO_LINES = ["we build", "real-world", "tech experience", "that matters"];

const Hero = () => {
    const heroRef = React.useRef<HTMLDivElement | null>(null);
    const { isLoaded } = useLoading();
    const hasLoaded = isLoaded();
    useGSAP(() => {
        if (!heroRef.current) return;
        if (typeof window === "undefined") return;
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktop) return;
        const lines = heroRef.current.querySelectorAll(".hero-line");
        const chars = heroRef.current.querySelectorAll(".hero-char");

        gsap.set(lines, { autoAlpha: 1 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (hasLoaded) {
            tl.from(lines, {
                y: 24,
                autoAlpha: 0,
                duration: 0.45,
                stagger: 0.14,
                delay: 0.1,
            }).from(chars, {
                y: 120,
                z: -240,
                rotateX: -75,
                scale: 0.7,
                filter: "blur(8px)",
                autoAlpha: 0,
                transformOrigin: "50% 100%",
                duration: 0.75,
                stagger: {
                    each: 0.02,
                    from: "start",
                },
                delay: 0.1,
            }, "-=0.25");
        }
        else {
             tl.from(lines, {
                y: 24,
                autoAlpha: 0,
                duration: 0.45,
                stagger: 0.14,
                delay: 1.5,
            }).from(chars, {
                y: 120,
                z: -240,
                rotateX: -75,
                scale: 0.7,
                filter: "blur(8px)",
                autoAlpha: 0,
                transformOrigin: "50% 100%",
                duration: 0.75,
                stagger: {
                    each: 0.02,
                    from: "start",
                },
                delay: 1.5,
            }, "-=0.25");
        }

    }, { scope: heroRef });

    function renderChars(line: string) {
        if (line === "real-world") {
            return <ShinyText speed={2.5} spread={90} shineColor="#8466F3" color="white" direction="right" yoyo text={line} className="hero-char inline-block" />
        }
        if (line === "tech experience") {
            return Array.from(line).map((char, index) => (
                <span key={`${line}-${index}`} className='hero-char special inline-block'>
                    {char === " " ? "\u00A0" : char}
                </span>
            ));
        }
        return Array.from(line).map((char, index) => (
            <span key={`${line}-${index}`} className='hero-char inline-block'>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    }

    return (
        <div className='relative text-white w-screen bg-[#101011] h-screen'>
            <div
                ref={heroRef}
                className='absolute left-6 top-[26%] max-sm:left-4 max-sm:text-5xl  sm:left-10 md:left-[14%] lg:left-[22%] overflow-hidden flex flex-col text-left uppercase font-[oswald] leading-none text-[14vw] sm:text-[11vw] md:text-[7.5vw]'
            >
                {HERO_LINES.map((line) => (
                    <div key={line} className='overflow-hidden'>
                        <div className='hero-line whitespace-nowrap'>{renderChars(line)}</div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Hero
