import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";
import Message from "./Message"
import NochatSelected from "./NochatSelected";
import Sidebar from "./Sidebar"
import { motion } from "framer-motion";

function Home() {
  const {selectedConversation , setSelectedConversation} =useConversation();

  const { showmsg ,setShowmsg } = useAuthContext();
  const showm = showmsg ? "" : "hidden";
  const showcon = showmsg ? "hidden" : "";

 useEffect(() => {
   if (selectedConversation) {
    setShowmsg(true)
   }

 }, [selectedConversation])
 




    

  return (
    <div className="flex flex-col md:flex-row">
        <motion.div  animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }} className={`min-w-[30%] md:flex  ${showcon} `}>
            <Sidebar/>
   
        </motion.div>
        <motion.div animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }} className={` w-full md:flex  md:w-[70%]  ${showm} `}>
            {selectedConversation ? (<Message/>)
        :(<NochatSelected/>) }
        </motion.div>
   
        
      
    </div>
  )
}

export default Home
