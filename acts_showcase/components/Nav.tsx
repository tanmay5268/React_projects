"use client"
import Link from "next/link"
import {usePageTransition} from "@/context/TransitionContext";
const Nav = () => {
const {navigateTo} = usePageTransition();

  return (
    <nav className="z-99 ">
      <Link onClick={(e)=>{e.preventDefault(); navigateTo("/")}} href="/">Home</Link>
      <Link onClick={(e)=>{e.preventDefault(); navigateTo("/about")}} href="/about">About</Link>
      <Link onClick={(e)=>{e.preventDefault(); navigateTo("/projects")}} href="/projects">Projects</Link>
      <Link onClick={(e)=>{e.preventDefault(); navigateTo("/teams")}} href="/teams">Teams</Link>
    </nav>
  )
}

export default Nav
