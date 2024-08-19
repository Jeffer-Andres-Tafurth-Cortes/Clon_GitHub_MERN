import { Route, Routes } from "react-router-dom"

import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ExplorePage from "./pages/ExplorePage"
import LikesPage from "./pages/LikesPage"

import Sidebar from "./components/Sidebar"

// El componente 'App' sera el encargado de renderizar todos los componentes de la aplicacion
function App() {

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
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/likes' element={<LikesPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
