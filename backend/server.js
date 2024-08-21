// Importamos 'Express'
import express from 'express'

// Importamos el manejador de variables de entorno
import dotenv from 'dotenv'

// Importamos cors para el tema de accesibilidad ya que el front-end y el back-end tienen direcciones URL diferentes
import cors from 'cors'

// Importamos los middleware creados en el la carpeta 'routes'
import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'

dotenv.config()

// Definimos la variable 'app' para poder usar 'express'
const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.use('/api/users', userRoutes)
app.use('/api/explore', exploreRoutes)

// Definimos el puerto que va a escuchar la variable 'app'
app.listen(5000, () => {
  console.log('El servidor esta corriendo en http://localhost:5000');
  
})