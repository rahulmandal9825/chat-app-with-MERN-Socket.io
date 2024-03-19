import Conversion from "./Conversion"
import { useState } from "react"
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversation";
import toast from "react-hot-toast";


function Sidebar() {
  const [search , setSearch] = useState("");
  const { setSelectedConversation }= useConversation();
  const { conversations }= useGetConversations();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!search) return;
     if(search.length < 3 ){
      return toast.error("esarch term must be atlest 3 characters long");
    }
    const conversation = conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()));
      console.log(conversation);
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else toast.error("no such User fond");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full ">
        <div className=" m-5 rounded-2xl flex justify-evenly bg-gray-600  ">
 <input type="text" placeholder=" Sarech...." onChange={(e)=>{setSearch(e.target.value)}} value={search} className=" rounded-xl   text-white bg-gray-600 placeholder:text-gray-300 p-4  focus:outline-none  " />
 <button type="submit"><i className=" cursor-pointer bg-transparent text-white text-2xl self-center fa-solid fa-magnifying-glass"></i></button>
 

        </div>
        <div className="text-white px-5 p-2 text-2xl">
        <i className="fa-solid fa-address-book"></i>
        <span className=" bg-transparent px-2 ">Contact</span>
        </div>
        <div  className="h-[68vh] mx-4 rounded-xl overflow-auto">
        <Conversion/>
        </div>
     

    </form>
  )
}

export default Sidebar
