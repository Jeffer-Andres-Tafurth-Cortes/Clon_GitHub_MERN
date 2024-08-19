import Repo from "./Repo"

// El componente 'Repos' es el encargado de renderizar todos los repositorios de un usuario
function Repos() {
  return (
    <div className='lg:w2/3 w-full bg-glass rounded-lg px-8 py-6'>
      <ol className='relative border-s border-gray-200'>

        {/** Se importa el componente 'Repo' */}
        <Repo />
      </ol>
    </div>
  )
}

export default Repos