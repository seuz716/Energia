const modelCentrales = require("./model");

/* El servicio contiene la logica de la api
recibe los datos del controlador 
y los manipula enviando y recibiendo los datos
desde el model y dando respuesta al controlador*/

async  function obtenerCentrales() {
    let centrales = await modelCentrales.findAll();
    return centrales;
};

async function obtenerCentral(id) {
    let central = await modelCentrales.findOne(id);
    return central;
};

async function obtenerCentralPorPais(pais) {
   let centrale = await modelCentrales.CentralPorPaises(pais);
   return centrale; 
};

async function obtenerCentralPorNombre(nombre){
    let central = await modelCentrales.obtenerPorNombre(nombre);
    return central; 
};
module.exports.obtenerCentrales = obtenerCentrales;
module.exports.obtenerCentral = obtenerCentral;
module.exports.obtenerCentralPorPais = obtenerCentralPorPais;
module.exports.obtenerCentralPorNombre = obtenerCentralPorNombre;