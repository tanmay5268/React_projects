"use client"
import Link from "next/link"
import {usePageTransition} from "@/context/TransitionContext";
const Nav = () => {
const {navigateTo} = usePageTransition();

  return (
    <nav className="absolute z-99 w-full h-16 flex items-center justify-center bg-transparent gap-10 pr-10 text-7xl font-[oswald] text-[#2b263e]">
      <Link className="text-2xl" onClick={(e)=>{e.preventDefault(); navigateTo("/")}} href="/">Home</Link>
      <Link className="text-2xl" onClick={(e)=>{e.preventDefault(); navigateTo("/about")}} href="/about">About</Link>
      <Link className="text-2xl" onClick={(e)=>{e.preventDefault(); navigateTo("/projects")}} href="/projects">Projects</Link>
      <Link className="text-2xl" onClick={(e)=>{e.preventDefault(); navigateTo("/teams")}} href="/teams">Teams</Link>
    </nav>
  )
}

export default Nav
