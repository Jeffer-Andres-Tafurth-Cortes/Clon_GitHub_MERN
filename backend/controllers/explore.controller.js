export const explorePopularRepos = async (request, response) => {

  const { language } = request.params

  try {
    const res = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=20`,{
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    })
    const data = await res.json()

    response.status(200).json({ repos: data.items })

  } catch (error) {
    
  }
}