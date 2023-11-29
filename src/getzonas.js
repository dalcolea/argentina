//incorporar la variable de conexión que tenemos en el fichero config.db
const {conexion} =  require('../config.db')

//definir la función getZonas donde accederemos a la base de datos 
const getZonas = (req, res) => {
    conexion.query("SELECT * FROM zonas",
        (error, results) => {
        error
        ? res.status(500).json({"error": error})
        : res.status(200).json(results);
    });
}

//exportar la función getZonas
module.exports = getZonas