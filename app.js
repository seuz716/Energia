/* Importar los modulos requeridos */

const express = require('express');

/* Configuracion Inicial */

const app = express();
const port = 3500;

/* Iniciar las rutas */

app.get("/prueba",function(req,res) {
    let nombre = "cesar";
    res.send(nombre);
});

app.get("/",function(req, res){
     res.send("hola")   
})

/* Configurar el puerto  */

app.listen(port, function () {
    console.log("Api ejecutandose en el puerto: " + port);
});
