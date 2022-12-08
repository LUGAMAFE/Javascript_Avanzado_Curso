const cliente = new Map();

// cliente.set("nombre", " karen");
cliente.set("tipo", " premium");
cliente.set("saldo", " 3000");

cliente.set(true, true);

console.log(cliente);

console.log(cliente.size);
console.log(cliente.has("nombre2"));
console.log(cliente.get());

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);
console.log(paciente);

paciente.forEach((datos, index) => {
  console.log(datos);
  //   console.log(index);
});
