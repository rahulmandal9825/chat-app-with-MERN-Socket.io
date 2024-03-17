import { useEffect } from "react";
import useConversation from "../zustand/useConversation"


function Conversionitem({ conversation, emoji }) {
  const {selectedConversation , setSelectedConversation} =useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div onClick={()=>{setSelectedConversation(conversation)}} className={`border-[1px] cursor-pointer border-gray-300 flex p-2 my-2 gap-3 rounded-xl hover:bg-blue-500 ${isSelected ? 'bg-blue-500':''} `}>
        <div className='w-[50px] avatar online'>
        <img className=' rounded-full' alt="Tailwind CSS chat bubble component" src={conversation.profilepic} />
        </div>
        <div className='text-white text-lg  self-center'>
            <h1>{conversation.fullname} {emoji}</h1>
        </div>
 
    </div>
  )
}

export default Conversionitem
