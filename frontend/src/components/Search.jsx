import { IoSearch } from "react-icons/io5"

// El componente 'Search' sera la barra de busqueda dentro de la pagina de inicio (HomePage)
function Search({ onSearch }) {
  return (
    <form className='max-w-xl mx-auto p-2' onSubmit={(e) => onSearch(e)}>
      <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
        Buscar
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
          <IoSearch className='w-5 h-5' />
        </div>
        <input type='search' id='default-search' className='block w-full p-4 ps-10 text-sm rounded-lg bg-class 
          focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent' placeholder='repositorio ...' required 
        />
        <button type='submit' className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800
          focus:ring-4 focus:online-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 
          bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300'
        >
          Buscar
        </button>
      </div>
    </form>
  )
}

export default Search