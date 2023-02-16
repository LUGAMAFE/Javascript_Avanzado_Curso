import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//conectar a la base de datos
db.authenticate()
  .then(() => console.log("base de datos conectada"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 4000;

//Habilitar pug
app.set("view engine", "pug");
app.use((req, res, next) => {
  const year = new Date();

  res.locals.unaVariable = year.getFullYear();
  res.locals.nombreSitio = "Agencia de viajes";
  next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//deifinir la carpeta publica
app.use(express.static("public"));

//Agregar Router
app.use("/", router);

app.listen(port, () => {
  console.log(`El Servidor esta funcionando en el puerto ${port}`);
});
