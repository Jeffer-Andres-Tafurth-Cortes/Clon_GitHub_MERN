// Importamos 'Express'
import express from 'express'
import { getLikes, getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js'
import { ensureAuthenticated } from '../middleware/ensuredAuthenticated.js'

// Importamos el manejados de rutas con 'Express'
const router = express.Router()

// Ruta para obtener la lista de repositorios del usuario (ruta -> '/profile/:username' )
router.get('/profile/:username', getUserProfileAndRepos)

// Ruta para hacer que el perfil reciba el like
router.get('/likes', ensureAuthenticated, getLikes)

// Ruta para darle like a un perfil de un usuario (ruta -> '/like/:username' )
router.post('/like/:username', ensureAuthenticated, likeProfile)


export default router