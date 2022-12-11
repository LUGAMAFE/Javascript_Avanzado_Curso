import {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro);
    this.categoria = categoria;
  }
  mostrarInformacion() {
    return `cliente: ${this.nombre} ahorro: ${this.ahorro} Categoria: ${this.categoria}`;
  }
}
