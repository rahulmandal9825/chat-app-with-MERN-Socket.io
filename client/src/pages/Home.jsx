import Message from "./Message"
import NochatSelected from "./NochatSelected";
import Sidebar from "./Sidebar"
import { motion } from "framer-motion";

function Home() {
    const nochatSelected =false;

  return (
    <div className="flex flex-col md:flex-row">
        <motion.div  animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }} className="min-w-[30%] ">
            <Sidebar/>
   
        </motion.div>
        <motion.div animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }} className="hidden md:flex">
            {nochatSelected ? (<NochatSelected/>)
        :(<Message/>) }
        </motion.div>
   
        
      
    </div>
  )
}

export default Home
