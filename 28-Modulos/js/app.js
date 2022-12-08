import nuevaFuncion, {
  nombreCliente,
  ahorro,
  categoria,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

//importar empresa

const empresa = new Empresa("codigo juan", 100, "aprendizaje en linea");

console.log(empresa.mostrarInformacion());
