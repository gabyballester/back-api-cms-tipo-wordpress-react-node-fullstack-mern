const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "gR7cH9Svfj8JLe4c186Ghs48hheb3902nh5DsA";

exports.ensureAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: "La peticion no tiene la cabecera de Autenticacion." });
  }
  // limpio token
  const token = req.headers.authorization.replace(/['"]+/g, "");

  try { //decodifica el token
    var payload = jwt.decode(token, SECRET_KEY);
    // comprobación caducidad
    if (payload.exp <= moment().unix()) {
      return res.status(404).send({ message: "El token ha expirado." });
    }
  } catch (ex) {
    return res.status(404).send({ message: "Token invalido." });
  }
  req.user = payload;
  next();
};
