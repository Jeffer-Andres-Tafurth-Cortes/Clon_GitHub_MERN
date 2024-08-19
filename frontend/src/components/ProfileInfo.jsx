import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi"
import { FaEye } from "react-icons/fa"


// El componente 'ProfileInfo' es el encargado de mostrar informacion del usuario
function ProfileInfo() {

  // Se define el array de los datos del usuario
  const userProfile = {
    avatar_url: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    bio: '👨‍💻',
    email: 'johndoe@gmail.com',
    followers: 100,
    following: 200,
    html_url: 'https://github.com/burakorkmez',
    location: 'En algun lugar del mundo',
    name:'John Doe',
    public_gist: 100,
    public_repos: 100,
    twitter_username: 'johndoe',
    login: 'johndoe'
  }

  return (

    // Este primer 'div' tendra la estructura del recuadro que va a mostrar la informacion respectiva del usuario
    <div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10'>
      <div className='bg-glass rounded-lg p-4'>
        <div className='flex gap-3 items-center'>

          {/** En forma de link va a estar la imagen del usuario */}
          <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
            <img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt={userProfile.name} />
          </a>

          {/** Se añade una opcion para ver el perfil del usuario en Github oficial */}
          <div className='flex gap-2 items-center flex-col'>
            <a href={userProfile.html_url} target='_blank' ref='noreferrer' 
              className='bg-glass font-medium w-full text-xs p-2 rounded-md cursos-md cursor-pointer border-blue-400
              flex items-center gap-2'
            >
              <FaEye size={16} />
              Ver en GitHub
            </a>
          </div>

        </div>

        {/** A partir de este 'div' se encontrara la biografia del usuario */}
        {userProfile?.bio ? (
          <div className='flex items-center gap-2'>
            <TfiThought />
            <p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ):(
          null
        )}

        {/** el siguiente 'div' contiene lo que es la ubicacion del usuario */}
        {userProfile?.location ? (
          <div className='flex items-center gap-2'>
            <IoLocationOutline />
            {userProfile?.location}
          </div>
        ): (
          null
        )}

        {/** El siguiente 'a' contiene lo que es el Twitter del usuario */}
        {userProfile?.twitter_username ? (
          <a href={`https://twitter.com/${userProfile.twitter_username}`} target='_blank' rel='noreferrer'
            className='flex itemx-center gap-2 hover:text-sky-500'
          >
            <FaXTwitter />
            {userProfile?.twitter_username}
          </a>
        ): (
          null
        )}

        {/** El siguiente 'div' contiene lo que seria la fecha desde la que la cuenta esta vigente */}
        <div className='my-2'>
          <p className='text-gray-600 font-bold text-sm'>Cuenta activa desde</p>
          <p className=''>21 Sep, 2023</p>
        </div>

        {/** El siguiente 'div' contiene lo que seria el correo electronico del usuario */}
        {userProfile?.email && (
          <div className='flex items-center gap-2'>
            <p className='text-gray-600 font-bold text-sm'>Correo electronico</p>
            <p className='text-sm'>{userProfile?.email}</p>
          </div>
        )}

        {/** El siguiente 'div' contiene lo que seria el nombre completo del usuario */}
        {userProfile?.name && (
          <div className='flex items-center gap-2'>
            <p className='text-gray-600 font-bold text-sm'>Nombre completo</p>
            <p className='text-sm'>{userProfile?.name}</p>
          </div>
        )}

        {/** El siguiente 'div' contiene lo que seria el nombre del usuario */}
        <div className='my-2'>
          <p className='text-gray-600 font-bold text-sm'>Nombre del usuario</p>
          <p className=''>{userProfile?.login}</p>
        </div>

        {/** En este 'div' se va a divir 4 cuadros cada uno con opciones diferentes de acuerdo al usuario */}
        <div className='flex flex-wrap gap-2 mx-4'>

          {/**Aqui estara el recuadro del numero de los seguidores del usuario */}
          <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
            <RiUserFollowFill className='w-5 h-5 text-blue-800' />
            <p className='text-xs'>Seguidores: {userProfile?.followers}</p>
          </div>

          {/** Aqui estara el recuadro del numero de cuentas que el usuario esta siguiendo */}
          <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
            <RiUserFollowLine className='w-5 h-5 text-blue-800' />
            <p className='text-xs'>Siguiendo: {userProfile?.following}</p>
          </div>

          {/** Aqui estara el recuadro del numero de repositorios publicos del usuario */}
          <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
            <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
            <p className='text-xs'>Repositorios publicos: {userProfile?.public_repos}</p>
          </div>

          {/** Aqui estara el recuadro del numero de  */}
          <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
            <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
            <p className='text-xs'>Gists públicos: {userProfile?.public_gist}</p>
          </div>

        </div>


      </div>
    </div>
  )
}

export default ProfileInfo