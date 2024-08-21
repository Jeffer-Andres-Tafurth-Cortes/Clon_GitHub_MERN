/* Definimos una variable llamada 'getUserProfileAndRepos' que sera nuestro controlador en la aplicacion
* para poder traer la informacion del usuario y por ende sus repositorios
*/
export const getUserProfileAndRepos = async (request, response) => {

  const { username } = request.params

  try {
    
    // Se obtiene la informacion del usuario
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    })
    const userProfile = await userRes.json()

    // Se obtiene los repositorios del usuario en cuestion
    const repoRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    })
    const repos = await repoRes.json()

    response.status(200).json({ userProfile, repos })

  } catch (error) {
    response.status(500).json({ error: error.message })
  }
}