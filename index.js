//incorporar el módulo del framework express 
const express = require("express")

//incorporar el módulo para poder aceptar peticiones cors
const cors = require("cors")

//crear la aplicación basada en el framework express
const app = express()

//habilitar peticiones cors
app.use(cors())

//utilizar express para capturar información del frontend que nos llegue en formato json
app.use(express.json())

//vamos a incorporar los ficheros con las rutas de la aplicación
app.use(require('./rutas/zonas'))
app.use(require('./rutas/excursiones'))

//arrancar la aplicación en el puerto que hemos especificado en el fichero .env
app.listen(process.env.PORT||3300,() => {
    console.log("Servidor corriendo en el puerto 3300");
});

//exportar la aplicación 
module.exports = app