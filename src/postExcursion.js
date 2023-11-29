//incorporar la variable de conexión que tenemos en el fichero config.db
const {conexion} =  require('../config.db')

//definir la función postExcursion donde accederemos a la base de datos 
const postExcursion = (req, res) => {
    //recuperar los datos de la excursion a dar de alta
    console.log(req.body)
    const {idzona, servicio, nombre, situacion, precio, imagen} = req.body
    
    conexion.query("INSERT INTO excursiones (nombre, situacion, servicio, precio, imagen, idzona) VALUES (?,?,?,?,?,?)", [nombre, situacion, servicio, precio, imagen, idzona],
        (error, results) => {
        error
        ? res.status(500).json({"error": error})
        : res.status(201).json(results);
    });
}

//exportar la función postExcursion
module.exports = postExcursion