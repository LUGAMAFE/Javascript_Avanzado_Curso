const carrito = [
  { nombre: "monitor de 20 pulgadas", precio: 50 },
  { nombre: "monitor de 20 pulgadas", precio: 50 },
  { nombre: "monitor de 20 pulgadas", precio: 50 },
  { nombre: "monitor de 20 pulgadas", precio: 50 },
  { nombre: "monitor de 20 pulgadas", precio: 50 },
  { nombre: "monitor de 20 pulgadas", precio: 50 },
];

const mayor400 = (producto) => {
  return producto.precio > 400;
};

const resultado = carrito.filter(mayor400);
console.log(resultado);
