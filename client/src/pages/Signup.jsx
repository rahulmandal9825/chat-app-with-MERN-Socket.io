import { motion } from "framer-motion";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { Link } from "react-router-dom";

function Signup() {

const [FromData , setFromData] = useState({
        fullname: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "boy"
});

const { loading, signup } = useSignup();


const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(FromData);
};


    return (
        <div className="flex w-full flex-col h-[89vh] justify-center">
            <motion.div animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }} className="h-[160px] flex justify-center"> <img className="mb-6 mt-5 w-[110px] " src={`https://avatar.iran.liara.run/public/${FromData.gender}`} /></motion.div>
           
            <form onSubmit={handleSubmit} className="flex self-center gap-5 flex-col text-white font-semibold  ">
            <motion.input animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white text-black p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder="Full Name" value={FromData.fullname} onChange={(e) => setFromData({ ...FromData, fullname: e.target.value })}
                />
                <motion.input animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white text-black p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder="Username"  value={FromData.username} onChange={(e) => setFromData({ ...FromData, username: e.target.value })}
                />
                <motion.input animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white text-black p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder="Password" value={FromData.password} onChange={(e) => setFromData({ ...FromData, password: e.target.value })}
                />
                <motion.input animate={{x:0}} initial={{x:-100}} transition={{ duration:.5 }}
                    type="text"
                    className="bg-white text-black p-3 w-[320px] md:w-[400px] rounded-xl text-base "
                    placeholder=" confirm password"  value={FromData.confirmPassword} onChange={(e) => setFromData({ ...FromData, confirmPassword: e.target.value })}
                />
                 <motion.div animate={{x:0}} initial={{x:+100}} transition={{ duration:.5 }} className='flex border-2 border-white p-1 rounded-lg items-center text-base  justify-between'>
            <label className= ' font-semibold text-lg'>Gender</label>
            <select
              id='gender'
              className='border rounded-lg p-2 px-10 text-white' onChange={(e) => setFromData({ ...FromData, gender: e.target.value })}
            >
              <option value='boy'>Male</option>
              <option value='girl'>Female</option>
            </select>
            </motion.div>
            <div className="flex gap-3 text-gray-400">
                <h1>Already have a Account </h1>
                <Link to={"/signin"} className="text-blue-500">Sign In</Link>
            </div>

            <motion.button disabled={loading} animate={{y:0}} initial={{y:-30}} transition={{ duration:.5 }}  className="text-xl p-1 rounded-xl cursor-pointer bg-blue-500  hover:bg-blue-700 font-semibold border-2 text-white  self-center
             w-[200px]">
                {loading ? <span className="loading loading-spinner"></span>: 'Sign up'}
            </motion.button>
        </form>
        </div>
    );
}

export default Signup;
