import { FaHeart } from "react-icons/fa"

// El componente 'LikesPage' mostrara
function LikesPage() {
  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>

      {/** Se va a usar una tabla para mostrar el registro de likes */}
      <table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>

        {/** 'thead' corresponde al encabezado de la tabla */}
        <thead className='text-xs uppercase bg-glass'>
          <tr>

            <th scope='col' className='p-4'>
              <div className='flex items-center'>No.</div>
            </th>

            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>Usuario</div>
            </th>

            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>Fecha</div>
            </th>

            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>Accion</div>
            </th>

          </tr>
        </thead>

        {/** 'tbody' corresponde al cuerpo de la tabla(contenido) */}
        <tbody>
          <tr className='bg-glass border-b'>

            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <span>1</span>
              </div>
            </td>

            <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
              <img className='w-10 h-10 rounded-full' alt='Imagen Usuario'
                src={'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'} 
              />
              <div className='ps-3'>
                <div className='text-base font-semibold'>dasdas</div>
              </div>  
            </th>

            <td className='px-6 py-4'>das</td>

            <td className='px-6 py-4'>
              <div className='flex items-center'>
                <FaHeart size={22} className='text-red-500 mx-2' />
                Le gusto tu perfil
              </div>
            </td>

          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default LikesPage