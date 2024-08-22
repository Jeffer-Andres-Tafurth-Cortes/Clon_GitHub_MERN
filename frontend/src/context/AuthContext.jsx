import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// Creamos un contexto para manejar el tema de autenticacion del usuario en toda la aplicacion
export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {

  const [authUser, setAuthUser] = useState(null);
  //const [loding, setLoading] = useState(false)

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      //setLoading(true )
      try {
        const res = await fetch('/api/auth/check', {credentials: 'include'})
        const data = await res.json()
        setAuthUser(data.user)

      } catch (error) {
        toast.error(error.message)
      } 
    }
    checkUserLoggedIn()
  }, []);

  return(
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}