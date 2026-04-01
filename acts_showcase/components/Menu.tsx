"use client";
import React, { useEffect, useRef } from 'react'
import './menu.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePageTransition } from '@/context/TransitionContext';
const menuLinks = [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Projects", href: "/projects" }, { label: "Teams", href: "/teams" }]
const Menu = () => {
    const { navigateTo } = usePageTransition();
    const container = React.useRef<HTMLDivElement>(null);
    //
    const tl = useRef<gsap.core.Timeline | null>(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }
    useGSAP(() => {
        gsap.set('.menu-link-item-holder', { y: 75 });
        tl.current = gsap.timeline({ paused: true })
        .to(".menu-overlay",{
            duration: 1.5,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut"
        })
        .to(".menu-link-item-holder", {
            y:0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
        })

    }, { scope: container })

useEffect(()=>{
    if(isMenuOpen){
        tl.current?.play();
    }
    else{
        tl.current?.reverse();
    }
},[isMenuOpen])
    return (
        <div className='menu-container' ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/">Home</Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className="menu-close-icon" onClick={toggleMenu}>
                    <p>&#x2715;</p>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((links, index) => (
                            <div className='menu-link-item' key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={links.href}>{links.label}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-info-col">
                            <a href="#">X &#8599;</a>
                            <a href="#">Instagram &#8599;</a>
                            <a href="#">LinkedIn &#8599;</a>
                            <a href="#">Behance &#8599;</a>
                            <a href="#">Dribbble &#8599;</a>
                        </div>
                    </div>
                </div>
                <div className="menu-preview"></div>
            </div>
        </div>
    )
}

export default Menu
