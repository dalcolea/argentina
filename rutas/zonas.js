//incorporar el modulo express
const express = require("express")
const app = express()

//incorporar el fichero con la consulta de zonas de la base de datos
const getZonas = require('../src/getzonas')

//definir la ruta asociada a la consulta de zonas
app.route('/api/zonas').get(getZonas)

//exportar la variable app
module.exports = app