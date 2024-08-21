import { useState } from "react";
import toast from 'react-hot-toast'
import Spinner from '../components/Spinner'
import Repos from '../components/Repos'

// El componente 'ExplorePage' constara de un buscador de repositorios existentes
function ExplorePage() {

  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // La funcion 'exploreRepos' se va a encargar de buscar los repositorios mas buscandos de acuerdo a algun lenguaje de programacion
  const exploreRepos = async (language) => {

    setLoading(true)
    setRepos([])

    try {
      const res = await fetch(`http://localhost:5000/api/explore/repos/${language}`)
      const { repos } = await res.json()
      setRepos(repos)
      setSelectedLanguage(language)

    } catch (error) {
      toast.error(error.message)

    } finally{
      setLoading(false)
    }
  }

  return (
    <div className='px-4'>
      <div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
        <h1 className='text-xl font-bold text-center'>Explorar los respositorios mas populares</h1>

        {/** Se va a mostrar los respositorios mas buscando con respecto a algunos lenguajes de programacion */}
        <div className='flex flex-wrap gap-2 my-2 justify-center'>
          <img src="/javascript.svg" alt="Logo de JavaScript" className='h-11 sm:h-20 cursor-pointer'
            onClick={() => exploreRepos('javascript')}
          />
          <img src="/typescript.svg" alt="Logo de TypeScript" className='h-11 sm:h-20 cursor-pointer' 
            onClick={() => exploreRepos('typescript')}
          />
          <img src="/c++.svg" alt="Logo de C++" className='h-11 sm:h-20 cursor-pointer' 
            onClick={() => exploreRepos('c++')}
          />
          <img src="/python.svg" alt="Logo de Python" className='h-11 sm:h-20 cursor-pointer' 
            onClick={() => exploreRepos('python')}
          />
          <img src="/java.svg" alt="Logo de Java" className='h-11 sm:h-20 cursor-pointer' 
            onClick={() => exploreRepos('java')}
          />
        </div>

        {/** De acuerdo al lenguaje de programacion seleccionado se renderizan los repositorios */}
        {repos.length > 0 && (
          <h2 className='text-lg font-semibold text-center my-4'>
            <span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full'>
              {selectedLanguage.toUpperCase()}{' '}
            </span>
            Repositorios
          </h2>
        )}
        {!loading && repos.length > 0 && (<Repos repos={repos} alwaysFullWith />)}
        {loading && (<Spinner />)}
      </div>
    </div>
  )
}

export default ExplorePage