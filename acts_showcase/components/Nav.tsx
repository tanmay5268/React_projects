"use client";

import Menu from "./Menu";

const Nav = () => {
    return (
        <div className='relative mt-5 text-white min-w-11/12 flex items-center justify-between  h-16'>
            <div className="left w-1/3 h-full flex items-center justify-start gap-4 ml-10">
                <Menu></Menu>
            </div>
            <div className="right  w-1/3 h-full flex items-center justify-end gap-4 mr-10">
                <div className="w-1/3 text-center">Contact</div>
                <div className="w-1/3 text-center">Contact</div>
                <div className="w-1/3 text-center">Contact</div>
            </div>
        </div>
    )
}

export default Nav
