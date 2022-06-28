
/*Controlador Recibe los datos del cliente, pasa los datos al servicio
recibe datos del servicio, Envia una respuesta al cliente */

const express = require('express');
const serviceCentrales = require('./service');
const controladorCentrales = express.Router();

/* Puntos de entrada a la Api.
Get -> obtener todas las centrales electricas.
Get -> Obtener una Central por Id.
Get -> Obtener Centrales por Pais
Get -> Obtener una Central por Nombre o descripcion.
Post -> Crear una nueva Central.
Put -> Actualizar Una Central.
Delete -> Eliminar una Central      */

controladorCentrales.get("/obtenerCentrales", async function (req, res) {
   let centrales = await serviceCentrales.obtenerCentrales();
   res.send({
    "mensaje":"Listado de Centrales",
    "data":centrales
   });
    
});

controladorCentrales.get("/obtenerCentral/:id", async function (req, res) {
    let id = req.params.id;
    let central = await serviceCentrales.obtenerCentral(id);
    res.send({
       " mensaje": "Estación Eléctrica",
       "data": central
    })
} );

controladorCentrales.get("/obtenerCentralPorNombre/:nombre", async function(req, res){
   let nombre = req.params.nombre;
   let central = await serviceCentrales.obtenerCentralPorNombre(nombre);
   res.send({
       "mensaje ": "Plantas Encontrada",
       "data": central
   });
});

controladorCentrales.get("/obtenercentralPorPais/:pais", async function (req, res) {
   let pais = req.params.pais;
   let central = await serviceCentrales.obtenerCentralPorPais(pais)
   res.send({
      "mensaje":"Estación Eléctrica",
      "data" :central
   })
});

controladorCentrales.get("/centralesMasGrandes", async function (req, res) {
   
   let central = await serviceCentrales.obtenerCentralPorTamano()
   res.send({
      "mensaje":"Estación Eléctrica",
      "data" :central
   }) 
})

module.exports = controladorCentrales;
