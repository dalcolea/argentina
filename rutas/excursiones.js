//incorporar el modulo express
const express = require("express")
const app = express()

//incorporar el fichero con la consulta de excursiones de una zona
const getExcursionesZona = require('../src/getExcursionesZona')

//incorporar el fichere con la consulta de detalle de una excursion
const getExcursion = require('../src/getExcursion')

//incorporar el fichero de alta de excursion
const postExcursion = require('../src/postExcursion')

//definir la ruta para el alta de excursion
app.route('/api/excursiones').post(postExcursion)

//definir la ruta asociada a la consulta de excursiones de una zona
app.route('/api/zonas/:id/excursiones').get(getExcursionesZona)

//definir la ruta asociada a la consulta de detalle de excursion
app.route('/api/excursiones/:id').get(getExcursion)

//exportar la variable app
module.exports = app