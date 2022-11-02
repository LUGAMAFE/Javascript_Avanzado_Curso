//  classes a javascript, sigue siendo un object constructor con sus prototypes..

// Las classes se crean con la palabra reservada class...

class Cliente {
  // El Nombre debe ser en mayusculas... Y esta forma se le conoce como CLASS DECLARATION

  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const juan = new Cliente("Juan", 400);

console.log(juan);

// Existe una segunda forma de crear classes, se le conoce como class Expression

const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const juan2 = new Cliente2("Juan", 400);
console.log(juan2);

// --------------------------------------------------------------------------------------------
// // heredar una clase

// class Cliente {
//   constructor(nombre, saldo) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//   }
//   imprimirSaldo() {
//     return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
//   }

//   retiraSaldo(retiro) {
//     this.saldo -= retiro;
//   }
//   static bienvenida() {
//     return `Bienvenido al cajero`;
//   }
// }

// class Empresa extends Cliente {
//   constructor(nombre, saldo, telefono, tipo) {
//     super(nombre, saldo);

//     this.telefono = telefono;
//     this.tipo = tipo;
//   }

//   static bienvenida(mensaje) {
//     return `Bienvenido al cajero para empresas`;
//   }
// }

// const pedro = new Cliente("Pedro", 3000);
// console.log(pedro);
// console.log(pedro.imprimirSaldo());

// // Heredando y creando una instancia de empresa
// const empresa = new Empresa("Empresa1", 10000, 10290193, "Construccion");

// console.log(empresa.imprimirSaldo());

// // Acceder al statico sin instanciar de ambos
// console.log(Empresa.bienvenida());
// console.log(Cliente.bienvenida());
// // -----------------------------------------------------------------------------------
// //  modificadores de acceso

// class Cliente {
//   #nombre = "";
//   constructor(nombre, saldo = 0) {
//     // this._nombre = nombre;
//     this.#nombre = nombre;
//     this.saldo = saldo;
//   }
//   nombreCliente() {
//     return this.#nombre;
//   }

//   retiraSaldo(retiro) {
//     this.saldo -= retiro;
//   }
// }

// const pedro = new Cliente("Pedro");
// console.log(pedro.nombreCliente());

// // console.log(pedro._nombre);

// // SOLUCION
// // console.log(pedro.#nombre);

// // ------------------------------------------------------------------------------------------------------------
// class User {
//   #id = "xyz";
//   constructor(name) {
//     this.name = name;
//   }
//   getUserId() {
//     return this.#id;
//   }
//   #destroy = () => {
//     this.#id = null;
//   };
// }
