const basedatos = require("../../database/conection");
const objectId = require('mongodb').ObjectId;

function findAll() {
    const  db = basedatos.obtenerConexion(); 
    return db.collection("generacionElectrica").find({}).toArray()
    .then(function (centrales) {
      return centrales;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function findOne(id) {
    const  db = basedatos.obtenerConexion(); 
    return db.collection("generacionElectrica").findOne({"_id" : objectId(id)})
    .then(function (central) {
        return central;
    })
    .catch(function (erro) {
        console.log(error);
    });
};

module.exports.findAll = findAll;
module.exports.findOne = findOne
