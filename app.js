/* Importar los modulos requeridos */

const express = require('express');
const bodyparser = require('body-parser');

/* Configuracion Inicial */

const app = express();
const port = 3500;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
/* Iniciar las rutas */

app.get("/prueba",function(req,res) {
    let nombre = "cesar";
    res.send(nombre);
});

app.get("/",function(req, res){
     res.send("hola")   
});

app.post("/usuarios",function (req, res) {
    let cuerpo = req.body;
    res.send(cuerpo.name);
});

app.get("/seleccionar", function (req,res) {
    let query = req.query;
    res.send(query);
});

app.put("/,actualizar/:nombre", function (req,res) {
    let nombre = req.params.nombre;
    let cuerpo = req.body;
    res.send({
        "nombre": nombre,
        "cuerpo": cuerpo
    })

})

/* Configurar el puerto  */

app.listen(port, function () {
    console.log("Api ejecutandose en el puerto: " + port);
});
