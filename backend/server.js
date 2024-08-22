// Importamos 'Express'
import express from 'express'

// Importamos el manejador de variables de entorno
import dotenv from 'dotenv'

// Importamos cors para el tema de accesibilidad ya que el front-end y el back-end tienen direcciones URL diferentes
import cors from 'cors'

import passport from 'passport'
import session from 'express-session'

import './passport/github.auth.js'

// Importamos los middleware creados en el la carpeta 'routes'
import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'
import authRoutes from './routes/auth.route.js'

// Importamos la función encargada de conectar la base de datos MongoDB
import connectMongoDB from './db/connectMongoDB.js'

dotenv.config()

// Definimos la variable 'app' para poder usar 'express'
const app = express()

app.use(session({ secret: 'Keyboard cat', resave: false, saveUninitialized: false}))
app.use(passport.initialize())  
app.use(passport.session())

app.use(cors())

app.get('/', (request, response) => {
  response.send('Hello World!')
})

// La ruta '/api/auth' corresponde a ya sea iniciar sesion o registrarse en la aplicacion usando una cuenta GitHub
app.use('/api/auth', authRoutes)

// La ruta '/api/users' corresponde a las funciones para obtener la informacion del usuario y por ende sus repositorios respectivamente
app.use('/api/users', userRoutes)

// La ruta '/api/explore' corresponde a las funciones para explorar y buscar repositorios mas comunes de acuerdo a 5 lenguajes de programacion
app.use('/api/explore', exploreRoutes)

// Definimos el puerto que va a escuchar la variable 'app'
app.listen(5000, () => {
  console.log('El servidor esta corriendo en http://localhost:5000');
  connectMongoDB()
})