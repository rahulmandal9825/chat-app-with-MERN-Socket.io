
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/uselogin";

function Signin() {
  const [username,setusername]= useState("");
  const [password,setpassword] = useState("");

  const {loading, login} = useLogin();
  const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

  return (
    <form onSubmit={handleSubmit} className='flex w-full flex-col h-[91vh]  md:mt-5 justify-center text-black'>
         <motion.h1  animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }}  className=' text-[40px] font-bold text-white self-center mb-10'>Sign In</motion.h1>
      <div className='flex self-center gap-10 flex-col  font-semibold text-3xl '>
        <motion.input animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }} type="text" id="username" value={username} onChange={(e)=>{
          setusername(e.target.value)
        }} className='bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base ' placeholder='Username' />
        <motion.input animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }} type="password" id="password" value={password} onChange={(e)=>{
          setpassword(e.target.value)
        }} className='bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base ' placeholder='Password' />
      </div>
      <div className="flex text-white  gap-3 self-center mt-3">
        <h1>dont Have a Account </h1>
        <Link to={"/signup"} className="text-blue-500 font-semibold">Sign Up</Link>
      </div>

      <motion.button  animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }} className='text-2xl p-2 rounded-xl cursor-pointer hover:bg-blue-500 transition-colors duration-500 font-semibold border-2 text-white m-10  self-center w-[200px]'>Sign In</motion.button>
    </form>
  )
}

export default Signin
