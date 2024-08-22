import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ExplorePage from "./pages/ExplorePage"
import LikesPage from "./pages/LikesPage"

import Sidebar from "./components/Sidebar"
import { useAuthContext } from "./context/AuthContext"

// El componente 'App' sera el encargado de renderizar todos los componentes de la aplicacion
function App() {

  const {authUser} = useAuthContext()
  console.log(authUser);
  
  return (
    <div className='flex text-white'>

      {/** Se importa el componente 'Sidebar' */}
      <Sidebar />

      {/** Este 'div' va a contener las medidas de las cuales se va a mostrar los componentes y demas secciones */}
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        {/** Se importa las distintas rutas que va a tener la aplicacion, cada ruta tiene su propio path
         * y a que componente se van a dirigir cuando este en esa ruta
         */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={'/'} />} />
          <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={'/'} />} />
          <Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={'/login'} />} />
          <Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={'/login'} />} />
        </Routes>
        <Toaster />
      </div>

    </div>
  )
}

export default App
