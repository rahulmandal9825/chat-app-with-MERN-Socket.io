import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();

export const useAuthContext =() =>{
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) =>{
    // Parse localStorage and handle potential errors
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("Current-User")) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};