const jwt = require("../services/jwt");
const moment = require("moment");
const User = require("../models/user");

function expirationCheck(token) {
  const { exp } = jwt.decodedToken(token);
  const currentDate = moment().unix();

  if (currentDate > exp) {
    return true;
  }
  return false;
}

function refreshAccessToken(req, res) {
  // recojo el refresh para ver si está vidente 
  const { refreshToken } = req.body;

  const hasExpired = expirationCheck(refreshToken);

  if (hasExpired) {
    res.status(404).send({ message: "El refreshToken ha expirado" });
  } else {

    const { id } = jwt.decodedToken(refreshToken);

    User.findOne({ _id: id }, (err, userStored) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!userStored) {
          res.status(404).send({ message: "Usuario no encontrado." });
        } else {
          res.status(200).send({
            accessToken: jwt.createAccessToken(userStored),
            refreshToken: refreshToken
          });
        }
      }
    });
  }



}

module.exports = {
  refreshAccessToken
};





