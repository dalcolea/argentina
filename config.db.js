//incorporar el módulo dotenv para poder utilizar el fichero de configuración .env
const dotenv = require("dotenv")
dotenv.config()

//incorporar el módulo para poder utilizar la base de datos mysql/mariaDB
const mysql = require("mysql")

//crear la variable de conexión que configuraremos después
let conexion;

//conexión a la base de datos utilizando los parámetros que tenemos en el fichero .env
try {
    conexion = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        port: process.env.DBPORT,
        password: process.env.DBPASS,
        database: process.env.DBNAME
    });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

//exportar la variable de conexion porque la vamos a necesitar fuera de este archivo 
module.exports = {conexion}