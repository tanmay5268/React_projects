"use client";
import VariableProximity from "./VariableProximity";
import Menu from "./Menu";
import { usePageTransition } from "@/context/TransitionContext";
import React from "react";
const Nav = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { navigateTo } = usePageTransition();

    const variableTextProps = {
        className: 'variable-proximity-demo',
        fromFontVariationSettings: "'wght' 300",
        toFontVariationSettings: "'wght' 700",
        containerRef,
        radius: 110,
        falloff: 'gaussian' as const,
        style: { fontFamily: 'oswald, sans-serif' },
    };

    return (
        <div className='z-50 relative mt-5 text-white min-w-11/12 flex items-center justify-between  h-16'>
            <div className="left w-1/3 h-full flex items-center justify-start gap-4 ml-10">
                <Menu></Menu>
            </div>
            <div ref={containerRef} className="right z-30 max-md:hidden w-1/3 relative h-full md:flex items-center justify-end gap-4 mr-10">
                <button onClick={() => {
                    navigateTo('/about')
                }} className="w-1/3 tracking-wider text-center uppercase cursor-pointer">
                    <VariableProximity
                        label={'ABOUT'}
                        {...variableTextProps}
                    />
                </button>
                <button onClick={() => {
                    navigateTo('/projects')
                }} className="w-1/3 tracking-wider text-center uppercase cursor-pointer">
                    <VariableProximity
                        label={'PROJECTS'}
                        {...variableTextProps}
                    />
                </button>
                <button onClick={() => {
                    navigateTo('/teams')
                }} className="w-1/3 tracking-wider text-center uppercase cursor-pointer">
                    <VariableProximity
                        label={'TEAMS'}
                        {...variableTextProps}
                    />
                </button>
            </div>
        </div>
    )
}

export default Nav
