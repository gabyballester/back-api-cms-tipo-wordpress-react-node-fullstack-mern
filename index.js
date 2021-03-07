const mongoose = require("mongoose");
const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB, port, DB_NAME } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const db = 'mongodb+srv://admin:YFSeJaieZReeMkCy@web-personal.4hz73.mongodb.net/web-personal?retryWrites=true&w=majority'
// const db = `mongodb://${IP_SERVER}:${PORT_DB}/${DB_NAME}`;
mongoose.connect(db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos es correcta.");

      app.listen(port, () => {
        console.log("######################");
        console.log("###### API REST ######");
        console.log("######################");
      });
    }
  }
);
