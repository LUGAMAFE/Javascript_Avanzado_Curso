function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "normal";
  }
  return tipo;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `nombre: ${this.nombre}, saldo: ${
    this.saldo
  } tipo cliente: ${this.tipoCliente()}`;
};

//intanciarlo

const pedro = new Cliente("pedro", 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());

console.log(pedro);
