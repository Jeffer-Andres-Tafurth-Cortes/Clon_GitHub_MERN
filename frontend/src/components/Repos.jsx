import Repo from "./Repo"

// El componente 'Repos' es el encargado de renderizar todos los repositorios de un usuario
function Repos({ repos, alwaysFullWith=false }) {

  // Si 'alwaysFullWith' es true, se establece el ancho del componente 'Repos' a 100% del contenido
  const className = alwaysFullWith ? 'w-full' : 'lg:w-2/3 w-full'

  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
      <ol className='relative border-s border-gray-200'>

        {/** Se mapean los repositorios para renderizarlos */}
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}

        {repos.length === 0 && (
          <p className='flex items-center justify-center h-32'>No se encontraron repositorios</p>
        )}
      </ol>
    </div>
  )
}

export default Repos