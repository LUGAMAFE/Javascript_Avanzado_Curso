var producto = "Monitor 23 Pulgadas";

producto = "Monitor de 19 Pulgadas";

console.log(producto);

var precio = 200;
console.log(precio);

var disponible;
disponible = true;

var categoria = "Computadoras",
  marca = "Marca Famosa",
  calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero

// var 99dias;
// var dias99;

// var _01;
// var 01_;

// Estilos para nombrar variables con más de una palabra más de una palabra.
var nombreProducto = "Monitor 30 Pulgadas"; // CamelCase
var nombre_producto = "Monitor 30 Pulgadas"; //underscore
var NombreProducto = "Monitor 30 Pulgadas"; // pascal case

// mismas reglas para el tipo de variable let

let producto = "Monitor 23 Pulgadas";
producto = "Monitor de 19 Pulgadas";

producto = 20;
producto = true;
producto = null;

console.log(producto);

let precio = 200;
console.log(precio);

let disponible;
disponible = true;

let categoria = "Computadoras",
  marca = "Marca Famosa",
  calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

// let 99dias;
// let dias99;

// let _01;
// let 01_;

let nombreProducto = "Monitor 30 Pulgadas"; // CamelCase
let nombre_producto = "Monitor 30 Pulgadas"; //underscore
let NombreProducto = "Monitor 30 Pulgadas"; // pascal case

// Tipo de variable variable const

//una variable con const su valor no puede ser re-asignado:

const producto = "Monitor 30 Pulgadas";
console.log(producto);
producto = "Monitor 23 Pulgadas";

// Por otro lado, las variables con const, deben iniciarse con un valor:
// const precio;
precio = 20;
console.log(precio);

// Existen otras diferencias entre const y let especialmente cuando se trabajan con arreglos y objetos
