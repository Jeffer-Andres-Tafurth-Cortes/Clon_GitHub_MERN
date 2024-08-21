// Importamos 'Express'
import express from 'express'
import { explorePopularRepos } from '../controllers/explore.controller.js'

// Importamos en manejos de rutas con 'Express'
const router = express.Router()

router.get('/repos/:language', explorePopularRepos)


export default router