// El componente 'SortRepos' sera el encargado de ordenar la busqueda realizadas de tres diferentes maneras
function SortRepos({ onSort, sortType }) {
  return (
    <div className='mb-2 flex justify-center lg:justify-end'>
      <button type='button' className={`py-2.5 px-2.5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none
        rounded-lg bg-glass ${sortType === 'recent' ? 'border-blue-500' : ''} `} onClick={() => onSort('recent')} 
      >
        Mas recientes
      </button>
      <button type='button' className={`py-2.5 px-2.5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none
        rounded-lg bg-glass ${sortType === 'stars' ? 'border-blue-500' : ''} `} onClick={() => onSort('stars')}
      >
        Mas estrellas
      </button>
      <button type='button' className={`py-2.5 px-2.5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none
        rounded-lg bg-glass ${sortType === 'forks' ? 'border-blue-500' : ''} `} onClick={() => onSort('forks')}
      >
        Mas tenedores
      </button>
    </div>
  )
}

export default SortRepos