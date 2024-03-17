import { useAuthContext } from "../context/AuthContext"


function NochatSelected() {

 
  const { authUser } = useAuthContext();
  return (
    <div className=" flex w-full justify-center mt-10 text-center ">
     <div className="flex flex-col text-4xl gap-5  w-full">
        <h1>Welcome {authUser.fullname}</h1>
        <h1>Select a chat to start messaging</h1>
        <i className=" text-[100px] text-gray-400 fa-regular fa-comments"></i>

        </div>
        
    </div>

  )
}

export default NochatSelected
