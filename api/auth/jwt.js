const jwt = require('jsonwebtoken');
require('dotenv').config();

/* Los datos requeridos son  Id, roles, nombre */

function generarToken(datos) {
    let payload = {
        "id":datos._id,
        "nombre":datos.nombre,
        "roles":datos.roles
    }
    const token = jwt.sign(payload,process.env.JWT_CLAVE,{
        expiresIn:process.env.JWT_EXPIRES
    }) 
    
    return token;
}

module.exports.generarToken = generarToken;