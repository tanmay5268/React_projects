"use client";
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from "react";
import video_cover from "@/public/video_cover.png"
import Image from "next/image";
import { gsap, CSSPlugin } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { useLoading } from '@/context/LoadingContext';
gsap.registerPlugin(CSSPlugin);
const Videos = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const { isLoaded } = useLoading();
    const hasLoaded = isLoaded();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const thumbnailRef = useRef<HTMLImageElement | null>(null);
    const handleVideoClick = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            void video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    };
    const mouseMove = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothMouseMove = {
        x: useSpring(mouseMove.x, { stiffness: 500, damping: 40, mass: 0.5 }),
        y: useSpring(mouseMove.y, { stiffness: 500, damping: 40, mass: 0.5 })
    }
    const handleMouseEnter = () => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        gsap.to(cursor, { autoAlpha: 1, duration: 0.3, ease: "power1.out" });
        document.querySelector('.elem-cursor')?.classList.add('hidden');
        document.body.classList.add('video-cursor-active');
    };
    const handleMouseLeave = () => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        gsap.to(cursor, { autoAlpha: 0, duration: 0.3, ease: "power1.out" });
        document.querySelector('.elem-cursor')?.classList.remove('hidden');
        document.body.classList.remove('video-cursor-active');
        const video = videoRef.current;
        if (video) {
            video.pause();
            setPlaying(false);
        }
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const rect = wrapper.getBoundingClientRect();
        mouseMove.x.set(e.clientX - rect.left);
        mouseMove.y.set(e.clientY - rect.top);

    }
    useGSAP(() => {
        const video = videoRef.current;
        const thumbnail = thumbnailRef.current;
        const wrapper = wrapperRef.current;

        if (!video || !thumbnail) return;

        const onPlay = () => {
            const tl = gsap.timeline()
            tl.to(thumbnail, { autoAlpha: 0, duration: 0.5, ease: "power1.out" })
        };

        const onPause = () => {
            gsap.to(thumbnail, { autoAlpha: 1, duration: 0.5, ease: "power1.out" });
        };
        if (hasLoaded) {
            gsap.from(wrapper, { opacity: 0, duration: 1, delay:0.6, ease: "power1.out" });
        }
        else {

            gsap.from(wrapper, { opacity: 0, duration: 1, delay: 4, ease: "power1.out" });
        }
        video.addEventListener("play", onPlay);
        video.addEventListener("pause", onPause);
        return () => {
            video.removeEventListener("play", onPlay);
            video.removeEventListener("pause", onPause);
        };
    }, []);
    return (
        <div ref={wrapperRef} className="w-full h-2/3 relative flex items-start justify-end-safe ">
            <div
                ref={containerRef}
                id="video-container"
                className="absolute overflow-hidden md:-top-10 md:w-2/3 md:h-130 cursor-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <video
                    ref={videoRef}
                    onClick={handleVideoClick}
                    className="w-full h-full object-cover cursor-pointer overflow-hidden"
                >
                    <source src="/intro.mp4" type="video/mp4" />

                </video>

                <Image ref={thumbnailRef} src={video_cover} className="overflow-hidden absolute top-0 left-0 w-full h-full pointer-events-none object-cover" alt="Video Cover" />
            </div>
            <motion.div
                ref={cursorRef}
                className="cursor max-sm:hidden pointer-events-none opacity-0 absolute w-15 h-15 md:w-30 md:h-30 rounded-full bg-sky-600 -translate-x-[80%] -translate-y-[80%]"
                style={{
                    left: smoothMouseMove.x,
                    top: smoothMouseMove.y,
                }}
            >
                {playing ? (
                    <FaPause className="text-white w-5 h-5 md:w-10 md:h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                ) : (
                    <FaPlay className="text-white w-5 h-5 md:w-10 md:h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                )}
            </motion.div>
        </div>
    );
};

export default Videos;
