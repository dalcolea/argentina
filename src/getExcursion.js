//incorporar la variable de conexión que tenemos en el fichero config.db
const {conexion} =  require('../config.db')

//definir la función getExcursion donde accederemos a la base de datos node 
const getExcursion = (req, res) => {
    //recuperar el parametro con la excursion a consultar y que nos llega en la ruta de la peticion
    const id = req.params.id
    conexion.query("SELECT * FROM excursiones WHERE idexcursion = ?", [id],
        (error, results) => {
        error
        ? res.status(500).json({"error": error})
        : res.status(200).json(results);
    });
}

//exportar la función getExcursionesZona
module.exports = getExcursion