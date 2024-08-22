// Se crea el middleware para verificar si el usuario esta autenticado o no
export async function ensureAutheticated(request, response, next){
  if(request.isAutheticated){
    return next()
  }
  response.redirect(process.env.CLIENT_BASE_URL + '/login')
}