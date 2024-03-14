import { motion } from "framer-motion";

function Signup() {
    return (
        <div className="flex w-full flex-col h-[89vh] justify-center">
            <motion.div animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }} className="h-[160px] flex justify-center"> <img className="mb-6 mt-5 w-[110px] " src="https://avatar.iran.liara.run/public" /></motion.div>
           
            <form className="flex self-center gap-5 flex-col text-white font-semibold text-3xl ">
            <motion.input animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder="Full Name"
                />
                <motion.input animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder="Username"
                />
                <motion.input animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder="Password"
                />
                <motion.input animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder=" confirm password"
                />
                 <motion.div animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }} className='flex border-2 border-white p-1 rounded-lg items-center text-base  justify-between'>
            <label className= ' font-semibold text-lg'>Gender</label>
            <select
              id='sort_order'
              className='border rounded-lg p-2 px-10 text-white'
            >
              <option value='boy'>Male</option>
              <option value='girl'>Female</option>
            </select>
            </motion.div>

            <motion.button animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }}  className="text-xl p-1 rounded-xl cursor-pointer bg-blue-500  hover:bg-blue-700 font-semibold border-2 text-white  self-center
             w-[200px]">
                Sign Up
            </motion.button>
        </form>
        </div>
    );
}

export default Signup;
