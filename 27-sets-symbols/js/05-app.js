const sym = Symbol();
const sym2 = Symbol();

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar nombre y apellido como llaves del objeto

persona[nombre] = "Juan";
persona[apellido] = "lopez";
persona.tipodecliente = "Premium";
persona.saldo = 500;

console.log(persona[nombre]);

// las propiedades que utilizan un symbol no son interables

for (let i in persona) {
  console.log(i);
}

// definir una descripccion del symbol
const nombreCliente = Symbol("Nombre del clente");
const cliente = {};

cliente[nombreCliente] = "pedro";

console.log(cliente);
