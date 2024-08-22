// Importamos 'Express'
import express from 'express'
import passport from 'passport'

// Importamos en manejos de rutas con 'Express'
const router = express.Router()

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }))

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL + '/login' }),
  function(request, response){
    response.redirect(process.env.CLIENT_BASE_URL)
  }
)

router.get('/check', (request, response) => {
  if (request.isAuthenticated()) {
    response.json({ user: request.user })
  } else {
    response.json({ user: null })
  }
})

router.get('/logout', (request, response) => {
  request.session.destroy((err) => {
    response.json({ message: 'Logged out' })
  })
})

export default router