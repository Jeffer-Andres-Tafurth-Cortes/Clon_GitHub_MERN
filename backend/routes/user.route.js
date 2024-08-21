// Importamos 'Express'
import express from 'express'
import { getUserProfileAndRepos } from '../controllers/user.controller.js'

// Importamos el manejados de rutas con 'Express'
const router = express.Router()

// Ruta para obtener la lista de repositorios del usuario (ruta -> '/profile/:username' )
router.get('/profile/:username', getUserProfileAndRepos)



export default router