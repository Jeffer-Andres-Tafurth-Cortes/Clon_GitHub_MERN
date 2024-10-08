import { FaHeart } from "react-icons/fa6"
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

// El componente 'LikeProfile' es un boton el cual se encarga de darle like al perfil de algun usuario
function LikeProfile({ userProfile }) {

  const { authUser } = useAuthContext()
  const isOwnProfile = authUser?.username === userProfile.login

  // La funcion 'handleLikeProfile' es la encargada de gestionar el Like a un perfil
  const handleLikeProfile = async () => {
    try {
      const res = await fetch(`/api/users/like/${userProfile.login}`, {
        method: 'POST',
        credentials: 'include'
      })
      const data = await res.json()
      if(data.error) throw new Error(data.error)
      toast.success('Has dado like al usuario')
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  if(!authUser || isOwnProfile) return null

  return (
    <button className='p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center 
      gap-2' onClick={handleLikeProfile}
    >
      <FaHeart size={16} />
      Me gusta este perfil
    </button>
  )
}

export default LikeProfile