/*Controlador Recibe los datos del cliente, pasa los datos al servicio
recibe datos del servicio, Envia una respuesta al cliente */

const express = require("express");
const serviceCentrales = require("./service");
const controladorCentrales = express.Router();

/* Puntos de entrada a la Api.
Get -> obtener todas las centrales electricas.
Get -> Obtener una Central por Id.
Get -> Obtener Centrales por Pais
Get -> Obtener una Central por Nombre o descripcion.
Post -> Crear una nueva Central.
Put -> Actualizar Una Central.
Delete -> Eliminar una Central      */

/* Al solicitar todos los elementos el req es la peticion misma, y el res envia la respuesta obtenida */
controladorCentrales.get("/obtenerCentrales", async function (req, res) {
  let centrales = await serviceCentrales.obtenerCentrales();
  res.send({
    mensaje: "Listado de Centrales",
    data: centrales,
  });
});

/* Obtiene un elemento por el _id de mongo, que se req a través de los parametros en la URL */
controladorCentrales.get("/obtenerCentral/:id", async function (req, res) {
  let id = req.params.id;
  let central = await serviceCentrales.obtenerCentral(id);
  res.send({
    " mensaje": "Estación Eléctrica",
    data: central,
  });
});

/*Obtiene un elementos por nombre  que se req a través de los parametros.nombre */
controladorCentrales.get("/obtenerCentralPorNombre/:nombre", async function (req, res) {
    let nombre = req.params.nombre;
    let central = await serviceCentrales.obtenerCentralPorNombre(nombre);
    res.send({
      "mensaje ": "Plantas Encontrada",
      data: central,
    });
  }
);

/*Obtiene un elementos por Pais  que se req a través de los parametros */
controladorCentrales.get("/obtenercentralPorPais/:pais",async function (req, res) {
    let pais = req.params.pais;
    let central = await serviceCentrales.obtenerCentralPorPais(pais);
    res.send({
      "mensaje": "Estación Eléctrica",
      data: central,
    });
  }
);

/*Obtiene los 20 elementos con mayor generacion electrica*/
controladorCentrales.get("/centralesMasGrandes", async function (req, res) {
  let central = await serviceCentrales.obtenerCentralPorTamano();
  res.send({
    "mensaje": "Estación Eléctrica",
    data: central,
  });
});

/*Crea un nuevo elemento al ser Post de debe solicitar los datos por body*/
controladorCentrales.post("/crearCentral", async function (req, res) {
  let datos = req.body;
  let central = await serviceCentrales.crearCentral(datos);
  res.send({
    "mensaje": central.mensaje,
    "datos": central.datos,
  });
});

/*Actualiza un elemento por id*/
controladorCentrales.put("/actualizarCentral/:id", async function(req, res) {
   let id = req.params.id;
   let datos = req.body;
   let resultado = await serviceCentrales.actualizarCentral(id, datos);
   res.send(resultado)
   });

  controladorCentrales.delete("/eliminarCentral/:id", async function (req, res) {
    let id = req.params.id;
    let resultado = await serviceCentrales.eliminarCentral(id);
    res.send(resultado)
  }); 


module.exports = controladorCentrales;
