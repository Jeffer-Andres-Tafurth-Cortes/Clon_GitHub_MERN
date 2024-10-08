import { Link } from "react-router-dom"

import { IoHomeSharp } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineExplore, MdEditDocument } from 'react-icons/md'
import { PiSignInBold } from 'react-icons/pi'
import Logout from "./Logout"
import { useAuthContext } from "../context/AuthContext"

/* El componente 'Sidebar' corresponde a la barra lateral de la izquieda de la aplicacion, esta misma sirve como
  navegacion de toda la aplicacion
*/
function Sidebar() {

  const {authUser} = useAuthContext()

  return (
    // Este aside contiene todo lo de la barra lateral de la izquierda de la aplicacion
    <aside className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto
      border-r bg-glass'
    >
      <nav className='h-full flex flex-col gap-3'>

        <Link to='/' className='flex justify-center'>
          <img className='h-8' src="/github.svg" alt="Logo de GitHub" />
        </Link>

        {/** Este segundo Link nos dirige al inicio de la pagina(HomePage) */}
        <Link to='/' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
          <IoHomeSharp size={22} />
        </Link>

        {/** Si el usuario si esta autenticado se muestra el apartado de likes(LikesPage) */}
        {authUser && (
          <Link to='/likes' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
            <FaHeart size={22} />
          </Link>
        )}

        {/** Si el usuario si esta autenticado se muestra el apartado de explorar(ExplorePage) */}
        {authUser && (
          <Link to='/explore' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
            <MdOutlineExplore size={25} />
          </Link>
        )}

        {/** Si el usuario no esta autenticado se muestra el icono para Iniciar Sesion(LoginPage)  */}
        {!authUser && (
          <Link to='/login' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
            <PiSignInBold size={25} />
          </Link>
        )}

        {/** Si el usuario no esta autenticado se muestra el icono para Registrarse(SignUpPage) */}
        {!authUser && (
          <Link to='/signup' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
            <MdEditDocument size={25} />
          </Link>
        )}

        {/** Si el usuario si esta autentica se muestra la opcion para cerrar sesion del usuario actual */}
        {authUser && (
          <div className='flex flex-col gap-2 mt-auto'>
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar