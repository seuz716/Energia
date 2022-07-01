const basedatos = require("../../database/conection");
const objectId = require("mongodb").ObjectId;

/* Se accede a la bd ,luego a la colleccion, se ejecuta la solicitud en  Json
 de acuerdo a los parametros de busqueda del motor de bd para este caso MongoDb*/

function findAll() {
  const db = basedatos.obtenerConexion();
  return db
    .collection("generacionElectrica")
    .find({})
    .toArray()
    .then(function (centrales) {
      return centrales;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function findOne(id) {
  const db = basedatos.obtenerConexion();
  return db
    .collection("generacionElectrica")
    .findOne({ _id: objectId(id) })
    .then(function (central) {
      return central;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function CentralPorPaises(pais) {
  const db = basedatos.obtenerConexion();
  return db
    .collection("generacionElectrica")
    .find({ country_long: new RegExp(pais, "i") })
    .toArray()
    .then(function (central) {
      return central;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function obtenerPorNombre(nombre) {
  let db = basedatos.obtenerConexion();
  return db
    .collection("generacionElectrica")
    .find({ name: new RegExp(nombre, "i") })
    .toArray()
    .then(function (central) {
      return central;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function obtenerPorTamano() {
  let db = basedatos.obtenerConexion();
  return db
    .collection("generacionElectrica")
    .find({ capacity_mw: { $gte: "900" } })
    .limit(20)
    .sort({ capacity_mw: -1 })
    .toArray()
    .then(function (central) {
      return central;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function crearUno(datos){
  let db =  basedatos.obtenerConexion();
   return db.collection("generacionElectrica").insertOne(datos)
  .then(function (resConsulta){
      return resConsulta; 
  })
  .catch(function (error){
      console.log(error);
  })
};

function actualizarUna(id, datos){
  let db =  basedatos.obtenerConexion();
   return db.collection("generacionElectrica").updateOne(
          {"_id": objectId(id)},
          {"$set": datos}
   )       
  .then(function (resultado){
      console.log(resultado);
      return resultado; 
  })
  .catch(function (error){
      console.log(error);
  })
};

function eliminarUna(id) {
  let db = basedatos.obtenerConexion();
  return db.collection("generacionElectrica").deleteOne(
    {"_id":objectId(id)})
    .then(function (resultado){
      console.log(resultado);
      return resultado; 
  })
  .catch(function (error){
      console.log(error);
  })
}

module.exports.findAll=findAll;
module.exports.findOne=findOne;
module.exports.CentralPorPaises=CentralPorPaises;
module.exports.obtenerPorNombre=obtenerPorNombre;
module.exports.obtenerPorTamano=obtenerPorTamano;
module.exports.crearUno=crearUno
module.exports.actualizarUna=actualizarUna;
module.exports.eliminarUna=eliminarUna;
