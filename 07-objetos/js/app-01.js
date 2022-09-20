// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
// };
// // sintaxis de punto

// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// // Otra forma aunque no tan común es:
// console.log(producto['nombre']);

// // Añadir propiedades nuevas a un objeto...
// producto.imagen = "image.jpg";

// // Finalmente para eliminar una propiedad se utiliza delete

// delete producto.nombre;

// console.log(producto);

// ------------------------------------------------------------

// dar el valor de un objeto a una variable

// const nombre = producto.nombre;

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

// const { nombre } = producto;

// // si deseas extraer más variables;
// const { precio } = producto;

// console.log(nombre)
// console.log(precio)

// O puedes hacerlo mejor con

// const {nombre, precio} = producto;

// ----------------------------------------------------

// objeto dentro de objeto

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
//   informacion: {
//     peso: "1kg",
//     medida: "1m",
//   },
// };

// console.log(producto); // Puedes ver que tenemos un objeto dentro de un objeto.

// // De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

// console.log(producto.informacion);
// console.log(producto.informacion.peso);
// console.log(producto.informacion.medida);

// ---------------------------------------

//  Destructuring para obejtos dentro de objetos

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
//   informacion: {
//     peso: "1kg",
//     medida: "1m",
//   },
// };

// const {
//   nombre,
//   informacion,
//   informacion: { peso, medida },
// } = producto;

// console.log(nombre);
// console.log(informacion);
// console.log(peso);
// console.log(medida);

// ----------------------------------------

// En el caso de los objetos veremos que sus propiedades si se pueden reescribir.

// const producto = {
//     nombre: "Monitor 20 pulgadas",
//     precio: 30,
//     disponible: true
// }

// console.log(producto);

// producto.disponible = false;

// console.log(producto); // Puedes ver que lo pudimos modificar, a pesar de ser const

// -----------------------------------------

// congelar los valores de un objeto para que no sea modificado

// "use strict";

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
// };

// console.log(producto);

// // Para ello utilizaremos un Object Method o Métodos de objetos.

// // Seguido me dicen, porque les dices Métodos, eso suena como algo de programación orientada a objetos
// // En realidad ese es su nombre, object methods, y en los siguientes videos los estaremos viendo algunos que son muy útiles.

// // Pero veamos como prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente forma:

// Object.freeze(producto); // Freeze toma como argumento el objeto

// // producto.disponible = false;

// // Freeze tampoco permite agregar nuevas propiedaes
// // producto.imagen = "imagen.jpg";

// // Tampoco se pueden eliminar propiedades

// // delete producto.nombre;

// // Finalmente si quieres revisar si un objeto esta congelado puedes usar

// console.log(Object.isFrozen(producto));

// console.log(producto);

// ----------------------------------------

// sellar los valores de un objeto

// "use strict";
// // A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
// };

// Object.seal(producto);

// // Se pueden reasignar
// producto.nombre = "Tablet";

// // Pero no eliminar
// // delete producto.precio;

// // Tampoco se pueden añadir nuevas
// // producto.imagen = "imagen.jpg";

// // Verificar si un objeto esta sellado
// console.log(Object.isSealed(producto));

// console.log(producto);

// -------------------------------------

// unir dos objetos y hacer uno nuevo

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
// };

// const medidas = {
//   peso: "1 kg",
//   medida: "1 metro",
// };

// // Una forma de hacerlo es con el object method llamado assign

// const resultado = Object.assign(producto, medidas);

// // Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator, veamoslo en el siguiente video

// console.log(resultado);

// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator

// const resultado = { ...producto, ...medidas};

// console.log(resultado);

// ---------------------------------

// palabra reservada this para referenciar al valor dentro de un objetos

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
//   mostrarInfo: function () {
//     return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
//   },
// };

// console.log(producto.mostrarInfo());

// ------------------------
// object contructor

// const producto = {
//   nombre: "Monitor 20 pulgadas",
//   precio: 30,
//   disponible: true,
// };

// function Producto(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.disponible = true;
// }

// const producto2 = new Producto("Monito de 20 pulgadas", 500);
// console.log(producto2);

// const producto3 = new Producto("television ", 100);
// console.log(producto2);

// -------------------------------------------------------

// //  Object.keys y object.values y entries, iteradores de objetos,

// const producto = {
//     nombre: "Monitor 20 pulgadas",
//     precio: 30,
//     disponible: true
// }

// console.log(Object.keys(producto));// nos devolverá un arreglo con los keys del objeto
// console.log(Object.values(producto)); // nos devolverá un arreglo con los valores del objeto
// console.log(Object.entries(producto)); // Entries nos va a retornar una matriz de llaves y valores
