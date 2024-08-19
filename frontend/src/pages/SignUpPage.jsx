import { FaGithub, FaUnlockAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// El componente 'SignUp tendra la logica de lo que compete para que un usuario se registre en la aplicacion' 
function SignUpPage() {
  return (

    // Este primer 'div' contiene las medidas y estilos de la pagina para registrarse(Sign Up)
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
      <div className='w-full rounded-lg shadow md:mt-0 sm:mt-0 sm:max-w-md xl:p-0 bg-glass' >
        
        {/* Este 'div' contiene los campos de registro, en este con una cuenta de GitHub */}
        <div className='p-6 spacey-y-4 md:space-y-6 sm:p-8'>

          <h1 className='text-xl font-bold md:text-2xl text-center'>
            Registrarme
          </h1>

          {/** Este 'button' es para acceder a la aplicacion a traves de una cuenta de GitHub */}
          <button type='button' className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
            focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center'
          >
            <FaGithub className='w-5 h-5' />
            Registrarme con GitHub
          </button>

          <p className='text-gray-300'>
            <span>
              Al registrarse se desbloquearan todas las funciones de la aplicacion
              <FaUnlockAlt className='w-4 h-4 inline mx-2' />
            </span>
          </p>

          {/** Se da la opcion de que si el usuario ya esta registrado, entonces debe es iniciar sesion */}
          <p className='text-sm font-light text-gray-500'>
            ¿Ya tienes una cuenta?{' '}
            <Link to='/login' className='font-medium text-primary-600 hover:underline text-blue-600'>
            Iniciar Sesion
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}

export default SignUpPage