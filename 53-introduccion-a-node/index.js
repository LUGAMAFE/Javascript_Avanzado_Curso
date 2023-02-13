import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

//Habilitar pug
app.set("view engine", "pug");
app.use((req, res, next) => {
  const year = new Date();

  res.locals.unaVariable = year.getFullYear();
  res.locals.nombreSitio = "Agencia de viajes";
  next();
});

//deifinir la carpeta publica

app.use(express.static("public"));

//Agregar Router
app.use("/", router);

app.listen(port, () => {
  console.log(`El Servidor esta funcionando en el puerto ${port}`);
});
