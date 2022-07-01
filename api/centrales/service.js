const modelCentrales = require("./model");

/* El servicio contiene la logica de la api recibe los datos del controlador 
y los manipula enviando y recibiendo los datos desde el model y dando respuesta al controlador*/

/* Obtiene todos los elementos */
async function obtenerCentrales() {
  let centrales = await modelCentrales.findAll();
  return centrales;
}

/* Obtiene un elemento por el _id de mongo */
async function obtenerCentral(id) {
  let central = await modelCentrales.findOne(id);
  return central;
}
/*Obtiene un elementos por Pais*/
async function obtenerCentralPorPais(pais) {
  let centrale = await modelCentrales.CentralPorPaises(pais);
  return centrale;
}
/* Obtiene elementos por nombre o parte de el*/
async function obtenerCentralPorNombre(nombre) {
  let central = await modelCentrales.obtenerPorNombre(nombre);
  return central;
}
/*Obtiene los 20 elementos con mayor variable, en este caso potencia*/
async function obtenerCentralPorTamano() {
  let central = await modelCentrales.obtenerPorTamano();
  return central;
}
/*Crea un nuevo elemento*/
async function crearCentral(datos) {
  let resultado = {};
  if (datos && Object.keys(datos).length > 0) {
    let resConsulta = await modelCentrales.crearUno(datos);
    if (resConsulta && resConsulta.acknowledged) {
      (resultado.mensaje = "Registro planta correcto"),
        (resultado.datos = resConsulta.insertedId),
        (resultado.datos = datos);
    } else {
      (resultado.mensaje = "Registro planta incorrecto"),
        (resultado.datos = datos);
    }
  } else {
    resultado.mensaje = "No se puede crear Planta";
    resultado.datos = "No hay datos";
  }
  return resultado;
}

async function actualizarCentral(id, datos) {
  let resultado = {};
  if (id && id.length == 24) {
    if (datos && Object.keys(datos).length > 0) {
      if (datos.nombre && datos.nombre !== "") {
        let resConsulta = await modelCentrales.actualizarUna(id, datos);
        if (resConsulta && resConsulta.acknowledged) {
          resultado.mensaje = "Planta Actualizada correctamente";
          resultado.datos = resConsulta;
        } else {
          resultado.mensaje = "Error al actualizar";
          resultado.datos = resConsulta;
        }
      } else {
        resultado.mensaje = "Titulo vacio";
        resultado.datos = datos.nombre ? datos.nombre : "";
      }
    } else {
      resultado.mensaje = "No hay datos";
      resultado.datos = datos;
    }
  } else {
    resultado.mensaje = "ID invalido";
    resultado.datos = id;
  }
  return resultado;
}

async function eliminarCentral(id){
    let resultado = {};
    if (id && id.length == 24 && /^[0-9A-F]+$/i.test(id)){
        let resultadoEliminar = await modelCentrales.eliminarUna(id); 
                if        (resultadoEliminar  && resultadoEliminar.acknowledged){
                          resultado.mensaje = "Planta eliminada correctamente";
                          resultado.datos = resultadoEliminar;
                    } 
                else {
                          resultado.mensaje = "Error al eliminar";
                          resultado.datos = id;  
                    }               
             } 
                else {
                          resultado.mensaje = "ID invalido";
                          resultado.datos = id;
                     }
     return resultado;
};

module.exports.obtenerCentrales = obtenerCentrales;
module.exports.obtenerCentral = obtenerCentral;
module.exports.obtenerCentralPorPais = obtenerCentralPorPais;
module.exports.obtenerCentralPorNombre = obtenerCentralPorNombre;
module.exports.obtenerCentralPorTamano = obtenerCentralPorTamano;
module.exports.crearCentral = crearCentral;
module.exports.actualizarCentral = actualizarCentral;
module.exports.eliminarCentral = eliminarCentral;
