import { Link } from "react-router-dom"
import Conversion from "./Conversion"


function Sidebar() {
  return (
    <div className="flex flex-col ">
        <div className=" m-5 rounded-2xl flex justify-evenly bg-gray-600  ">
 <input type="text" placeholder=" Sarech for friend"  className=" rounded-xl   text-white bg-gray-600 placeholder:text-gray-300 p-4  focus:outline-none  " />
 <i className=" cursor-pointer bg-transparent text-white text-2xl self-center fa-solid fa-magnifying-glass"></i>

        </div>
        <div className="text-white px-5 p-2 text-2xl">
        <i className="fa-solid fa-address-book"></i>
        <span className=" bg-transparent px-2 ">Contact</span>
        </div>
        <div  className="h-[68vh] mx-4 rounded-xl overflow-auto">
        <Conversion/>
        </div>
     

    </div>
  )
}

export default Sidebar
