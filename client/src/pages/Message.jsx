import { Link } from "react-router-dom"
import Messageitem from "./Messageitem"
import useConversation from "../zustand/useConversation";
import { useState } from "react";
import useSendMessage from "../hooks/useSendmessage";


function Message() {
  const {selectedConversation , setSelectedConversation ,Send} =useConversation();
  const{loading, sendMessage} = useSendMessage();
  const [message,setMessage] = useState("");

  const handdlesubmint = async  (e) => {
    e.preventDefault();
    if (!message) return;

     await sendMessage(message)
      setMessage("");
    
  }


   
  return (
    
    <div  className=" h-[85vh] md:w-[900px] m-3 rounded-xl  relative" >
        <div className="  flex border-b-[1px] w-full justify-evenly md:justify-between border-gray-500 px-4 sticky top-0 backdrop-grayscale">
            <div className="flex">
                <img className="w-[40px] h-[40px]   self-center " src={selectedConversation.profilepic} />
         <h1 className=" p-3 text-2xl font-semibold text-white ">{selectedConversation.fullname}</h1>
            </div>
        
         <Link to={"/"} className="  self-center">
            <i className="flex-1  fa-solid fa-arrow-left  text-white self-center text-right px-3 text-2xl"></i>
         </Link>
        </div>
        <div className="h-[466px]  overflow-auto"> 
            <Messageitem/>
        </div>
        
          <form  className=" text-white  bg-gray-700 px-4 backdrop-grayscale p-4 m-3 rounded-2xl flex sticky buttom-0 justify-between"  onSubmit={handdlesubmint}>
            <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Send the message.... "  className="w-[800px] focus:outline-none bg-transparent"/>
            <button type="submit">{loading ? (<div className="loading loading-spinner"></div>):(<i className=" text-xl fa-solid fa-paper-plane self-center"></i>)}</button>
            
          </form>
      



    </div>
  )
}

export default Message
