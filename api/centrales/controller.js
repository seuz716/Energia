
/*Controlador Recibe los datos del cliente, pasa los datos al servicio
recibe datos del servicio, Envia una respuesta al cliente */

const express = require('express');
const controladorCentrales = express.Router();

/* Puntos de entrada a la Api.
Get -> obtener todas las centrales electricas.
Get -> Obtener una Central por Id.
Get -> Obtener una Central por Nombre o descripcion.
Post -> Crear una nueva Central.
Put -> Actualizar Una Central.
Delete -> Eliminar una Central      */

controladorCentrales.get("/obtenerCentrales", function (req, res) {
    res.send({"mensaje" : "Listando Centrales"});
    
});

module.exports = controladorCentrales;
