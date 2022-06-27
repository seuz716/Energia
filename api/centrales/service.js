const modelCentrales = require("./model");

/* El servicio contiene la logica de la api
recibe los datos del controlador 
y los manipula enviando y recibiendo los datos
desde el model y dando respuesta al controlador*/

async  function obtenerCentrales() {
    let centrales = await modelCentrales.findAll();
    return centrales;
}

async function obtenerCentral(id) {
    let central = await modelCentrales.findOne(id);
    return central;
}


module.exports.obtenerCentrales = obtenerCentrales;
module.exports.obtenerCentral = obtenerCentral;