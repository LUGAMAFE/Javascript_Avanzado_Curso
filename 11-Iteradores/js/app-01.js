// // los For Loops tienen esa caracteristica, se ejecutan hasta que el código deja de cumplir esa condición...

// for (let i = 0; i <= 10; i += 2) {
//   console.log(`Numero:  ${i} `);
// }

// // Podemos llevar este ejemplo más allá una pregunta sencilla para programadores JR es como identificas un numero par o impar en un for loop...
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`Numero ${i} ES PAR `);
//   } else {
//     console.log(`Numero ${i} ES IMPAR `);
//   }
// }

// // Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...

// const carrito = [
//   { nombre: "Monitor 20 Pulgadas", precio: 500 },
//   { nombre: "Televisión 50 Pulgadas", precio: 700 },
//   { nombre: "Tablet ", precio: 300 },
//   { nombre: "Audifonos", precio: 200 },
//   { nombre: "Teclado", precio: 50 },
//   { nombre: "Celular", precio: 500 },
// ];

// for (let i = 0; i < carrito.length; i++) {
//   console.log(carrito[i].nombre);
// }

// // en este caso nuestro for loop corre hasta que una condición se cumple, ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará el código hasta que lleguemos al final del carrito...
// ---------------------------------------------------------------------------------
// // Veamos lo que es break y continue, break cortará la ejecución del for loop, mientras que continue nos permitirá interceptar digamos un elemento y continuar su ejecucicón...

// for(let i = 0; i <= 10; i++) {
//     if( i === 5) {
//         console.log('Estamos en el 5... FIN.');
//         break;
//     }
//     console.log(`Numero:  ${i} `);
// }

// for(let i = 0; i <= 10; i++) {
//     if( i === 5) {
//         console.log('Estamos en el 5... CONTINUAR....');
//         continue;
//     }
//     console.log(`Numero:  ${i} `);
// }

// //  Y en que casos puedes utilizar el continue??

// const carrito = [
//     { nombre: 'Monitor 20 Pulgadas', precio: 500},
//     { nombre: 'Televisión 50 Pulgadas', precio: 700},
//     { nombre: 'Tablet ', precio: 300, descuento: true},
//     { nombre: 'Audifonos', precio: 200},
//     { nombre: 'Teclado', precio: 50, descuento: true},
//     { nombre: 'Celular', precio: 500},
// ]

// for(let i = 0; i <= 10; i++) {
//     if(carrito[i].descuento) {
//         console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
//         continue;
//     }
//     console.log(carrito[i].nombre);
// }

// // -------------------------------------------------------------
// // fizz buzz

// for (let i = 1; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`${i} FIZZ BUZZ`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} buzz`);
//   }
// }

// // -------------------------------------------------------
// // Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..

// let i = 0;
// while (i < 10) { // condicion

//     // Bloque de código...
//     console.log(`Numero: ${i}`);

//     i++; // incremento
// }

// // ------------------------------------------------------------------------

// //  do while

// // a diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...

// // Do While va a correr al menos una vez.
// let i = 0; // probar con 1000

// do {
//     console.log(`Numero: ${i}`)
//     i++;
// } while( i < 10 );

// // Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...

// // cambiamos el i a 100 y revisamos...

//-------------------------------------------------------------------------------

//  forEach y Map

// let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// // Recorrer por un Foreach
// pendientes.forEach( (pendiente, index) =>  {
//     console.log(`${index} : ${pendiente}`);
// });

// // Recuerda que como es una sola linea, la llave es opcional...

// // Recorrer arreglo de objetos
// const carrito = [
//     {id: 1, producto: 'Libro' },
//     {id: 2, producto: 'Camisa'},
//     {id: 3, producto: 'Disco'}
// ];

// carrito.forEach( producto =>  {
//     console.log(`Agregaste ${producto}`);
// });

// // Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...

// // ---------------------------------------------------------------------------------------------------------------------

// //  for of...

// // For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

// let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// for (let pendiente of pendientes) {
//     console.log(pendiente);
// }
// // -----------------------------------------------------------------------

// // En el video anterior videos el for of ,en este video veremos el for in...

// // el for in va a iterar sobretodas las propiedades de un objeto, pero primero veamos como recorrer un arreglo con objetos...

// const carrito = [
//     {id: 1, producto: 'Libro' },
//     {id: 2, producto: 'Camisa'},
//     {id: 3, producto: 'Disco'}
// ];

// for (let producto of carrito) {
//     console.log(producto.producto);
// }

// let automovil = {
//     modelo: 'Camaro',
//     motor: '6.0',
//     anio: '1969',
//     marca: 'Chevrolet'
// }
// for(let auto in automovil) {
//     console.log(`${auto} : ${automovil[auto]}`);
// }
