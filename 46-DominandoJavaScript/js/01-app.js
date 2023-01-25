// function mostrarCliente() {
//   const cliente = "juan";
//   console.log(cliente);
// }
// console.log(cliente);
// mostrarCliente();

const login = true;

function clienteLogueado() {
  const cliente = "Juan";
  console.log(cliente);
  if (login) {
    const cliente = "admin";
    console.log(cliente);
  }
}

clienteLogueado();
