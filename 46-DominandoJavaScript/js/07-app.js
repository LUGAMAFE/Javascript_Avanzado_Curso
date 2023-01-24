console.log("Primero");

setTimeout(() => {
  console.log("Segundo");
}, 0);

console.log("tercero");

setTimeout(() => {
  console.log("cuarto");
}, 0);

new Promise((resolve) => {
  resolve("Desconocido...").then(console.log);
});

console.log("ultimo");

function hola() {
  console.log("hola");
}
hola();
