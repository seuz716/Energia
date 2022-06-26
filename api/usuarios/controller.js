const express = require("express");
const controladorUsuarios = express.Router();

controladorUsuarios.get("/iniciarSesion", function (req, res) {
  let user = req.query;
  res.send(
    { 
    "usuario": user.usuario,
    "contraseña":user.contrasena        
}
);
});

module.exports = controladorUsuarios;
