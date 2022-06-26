/* Importar los modulos requeridos */

const express = require('express');
const controladorCentrales = require('./api/centrales/controller');
const bodyparser = require('body-parser');

/* Configuracion Inicial */

const app = express();
const port = 3500;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

/* Iniciar las rutas */



app.use("/api/centrales", controladorCentrales);



/* Configurar el puerto  */

app.listen(port, function () {
    console.log("Api ejecutandose en el puerto: " + port);
});
