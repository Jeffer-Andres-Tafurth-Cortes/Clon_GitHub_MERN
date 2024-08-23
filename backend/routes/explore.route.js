// Importamos 'Express'
import express from 'express'
import { explorePopularRepos } from '../controllers/explore.controller.js'
import { ensureAuthenticated } from '../middleware/ensuredAuthenticated.js'

// Importamos en manejos de rutas con 'Express'
const router = express.Router()

router.get('/repos/:language', ensureAuthenticated, explorePopularRepos)


export default router