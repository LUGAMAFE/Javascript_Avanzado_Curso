// const numeros = [10, 20, 30, 40, 50];
// console.log(numeros);

// const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");
// console.log(meses);

// // Ahora no es obligatorio que el arreglo tenga numeros o strings unicamente, también puede tener un poco de todo:
// const deTodo = [
//   "Hola",
//   10,
//   true,
//   "si",
//   null,
//   { nombre: "Juan", trabajo: "Programador" },
//   [1, 2, 3, 4],
// ];
// console.log(deTodo);

// -------------------------------------------------------

// // acceder a los elementos de un arreglo...

// const numeros = [10,20,30,40,50];

// // esta vez estare utilizando
// console.table(numeros);

// // La forma en la que accedes a un arreglo es por lo que se econoce como el indice en el arreglo, los arreglos inician en 0 usualmente aunuque hay lenguajes donde inician en 1

// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[3])
// console.log(numeros[20])

// mover los arreglos
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

// // Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad
// console.log(meses.length);

// // ahora, si recuerdas en videos anteriores vimos como acceder a un arreglo, pero si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica, entonces, como acceder a todos los elementos? con algo llamado un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...

// for (let i = 0; i < meses.length; i++) {
//   console.log(meses[i]);
// }

// Al Igual que los objetos un arreglo se puede modificar a pesar ade utilizar la palabra const

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

// meses[0] = "Nuevo Mes";

//  También se puede añadir al final
// meses[6] = "Ultimo Mes";

// console.log(meses);
// -----------------------

// const carrito = [];

// // Añadir un elemento al carrito...
// const producto = {
//   nombre: "Monitor 20 Pulgadas",
//   precio: 500,
// };

// const producto2 = {
//   nombre: "Celular",
//   precio: 500,
// };

// carrito.push(producto);
// carrito.push(producto2);

// // Añadir al Inicio del carrito...

// const producto3 = {
//   nombre: "Teclado",
//   precio: 50,
// };
// carrito.unshift(producto3);

// // Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

// console.log(carrito);

// añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
// const carrito = [];

//  Añadir un elemento al carrito...
// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 500
// }

// const producto2 = {
//     nombre: 'Celular',
//     precio: 500
// }
// const producto3 =  {
//     nombre: 'Teclado',
//     precio: 50
// }

// //Para añadir producto al arreglo simplemente agregamos...
// let resultado = [...carrito, producto];
//  resultado = [...resultado, producto2];

//  // Para añadir al inicio...
//  resultado = [producto3, ...resultado];

// console.log(resultado);

// const carrito = [];

// const producto = {
//   nombre: "Monitor 20 Pulgadas",
//   precio: 500,
// };

// const producto2 = {
//   nombre: "Celular",
//   precio: 500,
// };

// carrito.push(producto);
// carrito.push(producto2);
// const producto3 = {
//   nombre: "Teclado",
//   precio: 50,
// };
// carrito.unshift(producto3);

// //  Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// // Eliminar el primer elemento...
// // carrito.shift();

// // // Eliminar el ultimo elemento...
// // carrito.pop();

// // Ahora supongamos que deseas eliminar del centro...
// carrito.splice(1, 0); // el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
// // carrito.splice(1, 2);

// console.log(carrito);

// // Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:

// const numeros = [10,20,30,40,50];

// const [primero, , segundo, tercero ] = numeros;

// // console.log(numeros);
// console.log(primero);
// console.log(segundo);
// console.log(tercero);

// // Si quieres saltarte un valor, pon una coma....

// // ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

// const [primero, , segundo, ...tercero ] = numeros;

//  métodos de arreglos
// const carrito = [
//     { nombre: 'Monitor 20 Pulgadas', precio: 500},
//     { nombre: 'Televisión 50 Pulgadas', precio: 700},
//     { nombre: 'Tablet ', precio: 300},
//     { nombre: 'Audifonos', precio: 200},
//     { nombre: 'Teclado', precio: 50},
//     { nombre: 'Celular', precio: 500},
// ]

// // Recorrer un arreglo de la forma tradicional y mostrar su contenido...
// for(let i = 0; i < carrito.length; i++ ){
//     console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )
// }

// // ForEach
// carrito.forEach( function(producto) {
//     console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
// })

// const carrito = [
//   { nombre: "Monitor 20 Pulgadas", precio: 500 },
//   { nombre: "Televisión 50 Pulgadas", precio: 700 },
//   { nombre: "Tablet ", precio: 300 },
//   { nombre: "Audifonos", precio: 200 },
//   { nombre: "Teclado", precio: 50 },
//   { nombre: "Celular", precio: 500 },
// ];

// // Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...

// const nuevoArray = carrito.map(function (producto) {
//   return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
// });

// const nuevoArray2 = carrito.forEach(function (producto) {
//   return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
// });

// console.log(nuevoArray);
// console.log(nuevoArray2);
