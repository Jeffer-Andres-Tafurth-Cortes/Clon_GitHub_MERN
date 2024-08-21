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
  const getUserProfileAndRepos = useCallback(async (username = 'burakorkmez') => {

    setLoading(true)

    try {
      const response = await fetch(`http://localhost:5000/api/users/profile/${username}`)
      const { repos, userProfile } = await response.json()
      repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))

      setRepos(repos)
      setUserProfile(userProfile)
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
  }, [getUserProfileAndRepos])

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

  // Se define la funcion 'onSort' la cual ordena los repositorios en 3 ordenes distintos
  const onSort = (sortType) => {

    if(sortType === 'recent'){
      repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
    } else if(sortType === 'stars'){
      repos.sort((a,b) => b.stargazers_count - a.stargazers_count)
    } else if(sortType === 'forks'){
      repos.sort((a,b) => b.forks_count - a.forks_count)
    }
    setSortType(sortType)
    setRepos([...repos])
  }

  return (
    <div className='m-4'>

      {/** Importamos el componente 'Search' que se comporta como barra de busqueda */}
      <Search onSearch={onSearch} />

      {/** Importamos el componente 'SortRepos' que seran tres botones con los cuales se ordenan los repositorios del usuario */}
      {repos.length > 0 && (
        <SortRepos onSort={onSort} sortType={sortType}  />
      )}

      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>

        {/** Si el usuario existe entonces se renderiza toda la informacion correspondiente */}
        {userProfile && !loading && (
          <ProfileInfo userProfile={userProfile} />
        )}

        {/** Si el usuario existe y si tiene repositorios entonces se renderizan en forma de lista los repositorios */}
        {!loading && (
          <Repos repos={repos} sortType={sortType} />
        )}

        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default Homepage