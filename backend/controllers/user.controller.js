import User from '../models/User.model.js'

/* Definimos una variable llamada 'getUserProfileAndRepos' que sera nuestro controlador en la aplicacion
* para poder traer la informacion del usuario y por ende sus repositorios
*/
export const getUserProfileAndRepos = async (req, res) => {

  const { username } = req.params

  try {
    
    // Se obtiene la informacion del usuario
    const userRes = await fetch(`https://api.github.com/users/${username}`, 
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        }
    })

    const userProfile = await userRes.json()

    // Se obtiene los repositorios del usuario en cuestion
    const repoRes = await fetch(userProfile.repos_url, 
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`
        }
    })

    const repos = await repoRes.json()

    res.status(200).json({ userProfile, repos })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Se define el controlador para cuando se le de like a un perfil de algun usuario en la aplicacion
export const likeProfile = async (req, res) => {
  try {
    const { username } = req.params
    const user = await User.findById(req.user._id.toString())
    console.log(user, 'auth user');
    const userToLike = await User.findOne({ username })
    
    if(!userToLike){
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    if(user.likedProfiles.includes(userToLike.username)){
      return res.status(400).json({ error: 'Ya le diste me gusta a este perfil' })
    }

    userToLike.likedBy.push({ username: user.username, avatarUrl: user.avatarUrl, likedDate: Date.now() })
    user.likedProfiles.push(userToLike.username)

    await Promise.all([userToLike.save(), user.save()])

    res.status(200).json({ message: 'Le diste me gusta a este perfil' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Se define el controlador para cuando se desea ver los likes de un usuario en la aplicacion
export const getLikes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id.toString())
    res.status(200).json({ likedBy: user.likedBy })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}