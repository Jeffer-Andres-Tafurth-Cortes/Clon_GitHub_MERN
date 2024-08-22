// Importamos 'mongoose' para conectar la aplicacion con la base de datos de MongoDB
import mongoose, { Mongoose } from "mongoose";

// La funcion 'connectMongoDB' es la encargada de ejecutar la conexion con la base de datos
export default async function connectMongoDB() {

  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('La base de datos esta conectada');
    

  } catch (error) {
    console.log('Error al conectar la base de datos MongoDB:', error.message);
    
  }

}