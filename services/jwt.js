const jwt = require("jwt-simple");
const moment = require("moment");

const secret_key = process.env.SECRET_KEY;

exports.createAccessToken = function(user) {
  console.log(SECRET_KEY);
  const payload = {
    id: user._id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    createToken: moment().unix(),
    exp: moment()
      .add(3, "hours")
      .unix()
  };

  return jwt.encode(payload, secret_key);
};

exports.createRefreshToken = function(user) {
  const payload = {
    id: user._id,
    exp: moment()
      .add(30, "days")
      .unix()
  };

  return jwt.encode(payload, secret_key);
};

exports.decodedToken = function(token) {
  return jwt.decode(token, secret_key, true);
};
