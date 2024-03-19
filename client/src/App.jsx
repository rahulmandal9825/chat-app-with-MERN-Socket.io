import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Message from "./pages/Message";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();

 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={authUser ? <Home/> : <Navigate to={'/Signin'}/>}/>
      <Route path="/Signin" element={authUser ? <Navigate to='/' /> :<Signin/>}/>
      <Route path="/Signup" element={authUser ? <Navigate to='/' /> :<Signup/>}/>
      <Route path="/message" element={<Message/>}/>
    </Routes>
    <Toaster/>
  </BrowserRouter>
  )
}

export default App
