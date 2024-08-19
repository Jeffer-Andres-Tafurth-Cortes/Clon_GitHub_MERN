import { FaCodeBranch } from "react-icons/fa6"

// El componente 'Repo' tendra la logica y estrutura que tendra cada repositorio mostrable
function Repo() {
  return (
    <li className='mb-10 ms-7'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white'>
        <FaCodeBranch className='w-5 h-5 text-blue-800' />
      </span>

      <div className='flex gap-2 items-center text-blue-800'>
        <a href={'http://github.com/burakorkmez/mern-chat-app'} target='_blank' rel='noreferrer' 
          className='flex items-center gap-2 text-lg font-semibold' 
        >
          mern-chat-app
        </a>
        <span className=''>

        </span>
      </div>
    </li>
  )
}

export default Repo