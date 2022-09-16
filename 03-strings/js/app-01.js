// const producto = 'Monitor 20 Pulgadas';
// const producto2 = String('Monitor 24 Pulgadas');
// const producto3 = new String('Monitor 30 Pulgadas'); // Esto crea un objeto cadena

// console.log(producto);
// console.log(producto2);
// console.log(producto3);
// para pulgadas:

// const producto4 = "Monitor 24\"";
// console.log(producto4);

// METODOS PARA STRINGS:

// Trim
// const producto = "        Monitor 20 Pulgadas      ";

// console.log(producto);
// console.log(producto.length);

// console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio
// console.log(producto.trimEnd()); // Elimina todos los espacios en blancos del final

// console.log(producto.trimStart().trimEnd()); // Cortar en ambas direcciones

//  hace lo mismo
// console.log(producto.trim().length);

// Lenght
// const producto = "Monitor 20 Pulgadas ";
// const precio = "30 USD";

// console.log(producto.length); // Conocer la extensión de una cadena, length es una propiedad

// IndexOf
// console.log(producto.indexOf("Pulgadas")); // Nos dirá que posición tiene el texto en caso de encontrarlo
// console.log(producto.indexOf("Tablet")); // -1 Significa que no lo pudo encontrar

// Includes
// console.log(producto.includes("Monitor")); // Conocer si un texto existe
// console.log(producto.includes("monitor")); // Conocer si un texto existe

// Replace
// const producto = 'Monitor 20 Pulgadas';
// console.log(producto.replace("20", "24"));
// console.log(producto.replace('Pulgadas', '"'));

// Slice
//  te va a permitir extraer una parte de una cadena
// console.log( producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
// console.log(producto.slice(8));// Cortar desde el 8 hasta el fin
// console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 10

// console.log(producto.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// substring
// Existe uno similar a Slice que se llama substring
// console.log( producto.substring(0, 10) );

// console.log( producto.substring(2, 1) );  // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:
// const nombre = "Juan";
// console.log(nombre.substring(0,1));
// console.log(nombre.charAt(0));

// Repeat
// const producto = "Monitor 24 pulgadas ";
// const texto = "en Promoción ".repeat(3);
// console.log(producto.repeat(3));
// console.log(producto.repeat(2.2)); // va a redondear a entero
// console.log(`${producto} ${texto} !!!`);

// Split
// const actividad = "Estoy aprendiendo Javascript Moderno";
// console.log(actividad.split(" "));

// const hobbies =
//   "Leer, caminar, escuchar musica, escribir, aprender a programar";
// console.log(hobbies.split(", "));

// .toUpperCase()
// te va a permitir cambiar un texto a todo mayusculas
// const producto = 'Monitor 24 pulgadas ';
// console.log(producto.toUpperCase() );

// .toLowerCase()
// console.log(producto.toLowerCase() );

// .toString()
// const cantidad = 200;
// console.log(cantidad);
// console.log(cantidad.toString());
