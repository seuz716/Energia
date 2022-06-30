/* Importar los modulos requeridos */
const express = require('express');
const conexion = require('./database/conection');
const controladorCentrales = require('./api/centrales/controller');
const controladorUsuarios = require('./api/usuarios/controller')
const bodyparser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

/* Configuracion Inicial */
const app = express();
const port = process.env.PORT;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(morgan(process.env.MORGAN));

/* Iniciar las rutas */
app.use("/api/centrales", controladorCentrales);
app.use("/api/usuarios", controladorUsuarios );

/* Configurar el puerto  */
conexion.conectar()
.then(function () {
    app.listen(port, function () {
        console.log("Api ejecutandose en el puerto: " + port );
       /*  console.log(conexion.obtenerConexion()); */
    }); 
})
.catch(function (error) {
    console.log(error);
})

