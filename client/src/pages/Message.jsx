import { Link } from "react-router-dom"
import Messageitem from "./Messageitem"


function Message() {
  return (
    <div  className=" h-[85vh] md:w-[900px] m-3 rounded-xl  relative" >
        <div className="  flex border-b-[1px] w-full justify-evenly md:justify-between border-gray-500 px-4 sticky top-0 backdrop-grayscale">
            <div className="flex">
                <img className="w-[40px] h-[40px]   self-center " src="https://avatar.iran.liara.run/public" />
         <h1 className=" p-3 text-2xl font-semibold text-white ">Rahul Mandal</h1>
            </div>
        
         <Link to={"/"} className="  self-center">
            <i className="flex-1  fa-solid fa-arrow-left  text-white self-center text-right px-3 text-2xl"></i>
         </Link>
        </div>
        <div className="h-[466px]  overflow-auto"> 
            <Messageitem/>
        </div>
        <div className=" text-white  bg-gray-700 px-4 backdrop-grayscale p-4 m-3 rounded-2xl flex sticky buttom-0 justify-between" >
            <input type="text" placeholder="Send the message.... "  className=" focus:outline-none bg-transparent"/>
            <i className=" text-xl fa-solid fa-paper-plane self-center"></i>
        </div>



    </div>
  )
}

export default Message
