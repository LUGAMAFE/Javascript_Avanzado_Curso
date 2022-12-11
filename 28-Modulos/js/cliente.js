export const nombreCliente = "juan";
export const ahorro = 300;
export const categoria = "premium";

export function mostrarInformacion(nombre, ahorro) {
  return `cliente: ${nombre} ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("si tiene saldo");
  } else {
    console.log("no tiene saldo");
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInformacion() {
    return `cliente: ${this.nombre} ahorro: ${this.ahorro}`;
  }
}

export default function nuevaFuncion() {
  console.log("este es el export default ");
}
