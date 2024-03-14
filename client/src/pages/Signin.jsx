
import { motion } from "framer-motion";

function Signin() {
  return (
    <div className='flex w-full flex-col h-[86vh]  mt-[100px] md:mt-5 justify-center'>
         <motion.h1 animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }}  className=' text-[40px] font-bold text-white self-center mb-10'>Sign In</motion.h1>
      <div className='flex self-center gap-10 flex-col text-white font-semibold text-3xl '>
        <motion.input animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }} type="text" className='bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base ' placeholder='Username' />
        <motion.input animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }} type="text" className='bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base ' placeholder='Password' />
      </div>
      <motion.button  animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }}  className='text-2xl p-2 rounded-xl cursor-pointer hover:bg-blue-500 transition-colors duration-500 font-semibold border-2 text-white m-10 self-center w-[200px]'>Sign In</motion.button>
    </div>
  )
}

export default Signin
