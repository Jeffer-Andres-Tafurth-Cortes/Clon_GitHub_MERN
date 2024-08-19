// El componente 'SortRepos' sera el encargado de ordenar la busqueda realizadas de tres diferentes maneras
function SortRepos() {
  return (
    <div className='mb-2 flex justify-center lg:justify-end'>
      <button type='button' className={`py-2.5 px-2.5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none
        rounded-lg bg-glass`}
      >
        Mas recientes
      </button>
      <button type='button' className={`py-2.5 px-2.5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none
        rounded-lg bg-glass`}
      >
        Mas estrellas
      </button>
      <button type='button' className={`py-2.5 px-2.5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none
        rounded-lg bg-glass`}
      >
        Mas tenedores
      </button>
    </div>
  )
}

export default SortRepos