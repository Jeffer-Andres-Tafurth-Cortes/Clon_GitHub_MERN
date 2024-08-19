// El componente 'ExplorePage' constara de un buscador de repositorios existentes
function ExplorePage() {
  return (
    <div className='px-4'>
      <div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
        <h1 className='text-xl font-bold text-center'>Explorar los respositorios mas populares</h1>
        <div className='flex flex-wrap gap-2 my-2 justify-center'>
          <img src="/javascript.svg" alt="Logo de JavaScript" className='h-11 sm:h-20 cursor-pointer'/>
          <img src="/typescript.svg" alt="Logo de TypeScript" className='h-11 sm:h-20 cursor-pointer' />
          <img src="/c++.svg" alt="Logo de C++" className='h-11 sm:h-20 cursor-pointer' />
          <img src="/python.svg" alt="Logo de Python" className='h-11 sm:h-20 cursor-pointer' />
          <img src="/java.svg" alt="Logo de Java" className='h-11 sm:h-20 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default ExplorePage