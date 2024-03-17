import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useeLogout";



function Navbar() {
  const { authUser } = useAuthContext();
  const {loading,logout} =useLogout();
 
  return (
    <nav className="flex w-full justify-between pt-3 md:p-3">
        <motion.div animate={{x:+20 }} initial={{x:-10}} transition={{ duration:.5 }}  className="md:px-3 flex gap-2 text-white hover:text-blue-400 transition-colors duration-500">
        <i className=" self-center fa-solid fa-bolt"></i>
        <Link to="/" className=" self-center cursor-pointer  text-2xl font-semibold ">TalkEase</Link>
        </motion.div>

        {authUser ? (<motion.div animate={{x:-20 }} initial={{x:+10}} transition={{ duration:.5 }} className=" flex gap-2 p-1">
        <button disabled={loading}  onClick={logout} className="text-white font-semibold text-base md:text-xl py-1 rounded-md px-3 md:px-5  border-2 hover:bg-blue-500  transition-colors duration-500   ">
          {loading ? <span className="loading loading-spinner"></span>: 'Sign out'}

        </button>
        </motion.div>):(
          <motion.div animate={{x:-20 }} initial={{x:+10}} transition={{ duration:.5 }} className=" flex gap-2 p-1">
          <Link to="/Signin" className="text-white font-semibold text-base md:text-xl py-1 rounded-md px-3 md:px-5  border-2 hover:bg-blue-500  transition-colors duration-500   ">Sign In</Link>
          <Link to="/Signup" className="text-white font-semibold text-base md:text-xl py-1 rounded-md px-3 md:px-5 hover:bg-blue-500  transition-colors duration-500  border-2  ">Sign Up</Link>
          </motion.div>
        )}

    </nav>
  )
}

export default Navbar
