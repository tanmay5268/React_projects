import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
const HeroSection = () => {
    return (
        <div style={{ backgroundImage: "url('https://www.reconnectwithnature.org/getmedia/f8d8e68d-bfaa-456b-a47c-c757bc5a9bde/hero-Buzz-2022-2.jpg?width=3000&height=1000&ext=.jpg')" }} className=" z-0 w-screen h-119 relative overflow-hidden object-cover bg-cover bg-center">
            <div className="z-1 absolute w-full h-40 top-0 left-0  bg-linear-to-b from-black/90 via-black/50 to-transparent"></div>
            <div className=" z-100 absolute flex items-center justify-between p-10 h-26 mt-2 w-full">
                <img className="h-25 w-auto p-1" src="https://www.reconnectwithnature.org/getmedia/8403ec76-3dd8-4321-ab0f-8cf8a70e162d/Logo-rev.png?width=970&height=413&ext=.png" />
                <div className="w-xm flex flex-col items-end">
                    <h1 style={{fontFamily:'Cabin',lineHeight:'1.3'}} className="w-full tracking-tight text-white font-medium">Today's sunset is at 5:25 p.m.
                        <br />All preserves close at sunset.</h1>
                    <div className="mt-3 flex items-center">
                        <MdOutlineSearch className="text-white text-4xl" />
                        <RxHamburgerMenu className="text-white text-4xl ml-4" />
                    </div>
                </div>

            </div>
            <div className="w-full relative flex items-center justify-center h-full">
                <h1 style={{ fontFamily: 'Cabin', lineHeight: '1.3'}} className=" mt-6 z-100 text-[5rem] text-shadow-lg/60  tracking-tight text-shadow-black text-white font-bold">The buzz</h1>
            </div>


        </div>
    )
}

export default HeroSection
