import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

// El componente 'LoginPage' responde a la seccion en donde un usuario inicia sesion en la aplicacion
function LoginPage() {
  return (
    // Este primer 'div' corresponde a los estilos y medidas de lo que sera el formulario de inicio de sesion
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
      <div className='w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>

        {/** Este 'div' contendra la caja de formulario del inicio de sesion del usuario */}
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>

          <h1 className='text-xl font-bold md:text-2xl text-center'>
            Iniciar Sesion
          </h1>

          <button type='button' className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focuse:ring-4 
            focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center
            w-full text-center justify-center'
          >
            <FaGithub className='w-5 h-5' />
            Iniciar Sesion con GitHub
          </button>

          <p className='text-sm font-light text-gray-500'>
            ¿Aun no tienes cuenta?{' '}
            <Link to='/signup' className='font-medium text-primary-600 hover:underline text-blue-600'>
              Registrarme
            </Link>
          </p>

        </div>

      </div>
    </div>
  )
}

export default LoginPage