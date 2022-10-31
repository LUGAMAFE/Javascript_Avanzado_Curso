function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function () {
  // Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
  let tipo;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

// Otro Prototipo para el nombre completo
Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo ${
    this.saldo
  }, Tipo Cliente:  ${this.tipoCliente()} `;
};

Cliente.prototype.retiraSaldo = function (retiro) {
  this.saldo -= retiro;
};

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.contructor = Cliente;

const juan = new Persona("Juan", 5000, 9942409);
console.log(juan);

Persona.prototype.mostrarTelefono = function () {
  return `el telefono de esta persona es ${this.telefono}`;
};
console.log(juan.mostrarTelefono());
