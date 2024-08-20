import { useCallback, useEffect, useState } from "react";
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"
import Search from "../components/Search"
import SortRepos from "../components/SortRepos"
import toast from "react-hot-toast";
import Spinner from '../components/Spinner'

// El componente 'HomePage' contiene todo lo que seria el inicio de la aplicacion
function Homepage() {

  // Se define una seria de 'useState' para poder implementar la la informacion del usuario
  const [userProfile, setUserProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortType, setSortType] = useState('recent')

  // Se define la funcion 'getUserProfileAndRepos' para obtener el usuario y sus repositorios
  const getUserProfileAndRepos = useCallback(async (username= 'burakorkmez') => {

    setLoading(true)

    try {

      // Se obtiene la informacion del usuario
      const userRes = await fetch(`https://api.github.com/users/${username}`)
      const userProfile = await userRes.json()
      setUserProfile(userProfile)

      // Se obtiene los repositorios del usuario en cuestion
      const repoRes = await fetch(userProfile.repos_url)
      const repos = await repoRes.json()
      setRepos(repos)

      return { userProfile, repos }

    } catch (error) {
      toast.error(error.message)

    }finally {
      setLoading(false)
    }
  }, [])

  // Se utiliza 'useEffect' para que se ejecute una sola vez al cargar la pagina
  useEffect(() => {
    getUserProfileAndRepos()
  }, [getUserProfileAndRepos]);

  // Se define la funcion 'onSearch' cuando ya se ejecute el evento onSubmit del componente 'Search'
  const onSearch = async (e, username) => {
    e.preventDefault()

    setLoading(true)
    setRepos([])
    setUserProfile(null)

    const { userProfile, repos} = await getUserProfileAndRepos(username)
    setUserProfile(userProfile)
    setRepos(repos)
    setLoading(false)
  }

  return (
    <div className='m-4'>

      {/** Importamos el componente 'Search' que se comporta como barra de busqueda */}
      <Search onSearch={onSearch} />

      {/** Importamos el componente 'SortRepos' que seran tres botones con los cuales se ordenan los repositorios del usuario */}
      <SortRepos />

      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>

        {/** Si el usuario existe entonces se renderiza toda la informacion correspondiente */}
        {userProfile && !loading && (
          <ProfileInfo userProfile={userProfile} />
        )}

        {/** Si el usuario existe y si tiene repositorios entonces se renderizan en forma de lista los repositorios */}
        {repos.length > 0 && !loading && (
          <Repos repos={repos} sortType={sortType} />
        )}

        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default Homepage