import { GoDotFill } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="bg-[#3D7735] w-full h-15 flex items-center">
        <div className=" ml-10 flex items-center  ">

        {['Home','news & events','the buzz',' Not all blue birds are bluebirds: Learn the difference between our blue-hued birds '].map((item, index) => (
          <div key={index} className="flex items-center">
            <span style={{fontFamily:'Cabin'}} className="text-white tracking-wide font-semibold uppercase text-sm mx-3">{item}</span>
            {index=== 3 ? '':<GoDotFill className=" text-gray-700 opacity-45 h-2 w-2 " />}

          </div>
        ))}
    </div>
    </div>

  )
}

export default Navbar
