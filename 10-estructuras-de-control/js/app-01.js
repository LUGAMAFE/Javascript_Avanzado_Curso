// // creando un if

// const puntaje = 1000;
// const puntaje2 = "1000";

// console.log(typeof puntaje);
// console.log(typeof puntaje2);

// if (puntaje === 1000) {
//   console.log("si es igual");
// } else {
//   console.log("es diferente");
// }

// // == operador no estricto
// // === operador estricto

// ----------------------------------------------------------

// // mayor que y menor que

// const dinero = 500;
// const totalAPagar = 300;

// if (dinero >= totalAPagar) {
//   console.log("si podemos pagar");
// }
// else {
//     console.log('Fondos insuficientes')
// }

// --------------------------------------------------

// // else if

// const dinero = 500;
// const totalAPagar = 300;
// const tarjeta = true;
// const cheque = false;

// if (dinero >= totalAPagar) {
//   console.log("si podemos pagar");
// } else if (cheque) {
//   console.log("si puedo pagara porque tengo la tarjeta");
// } else if (tarjeta) {
//   console.log("si puedo pagara porque tengo la tarjeta");
// } else {
//   console.log("Fondos insuficientes");
// }

// -----------------------------------------------------
// // operador switch
// const metodoPago = "efectivo";

// switch (metodoPago) {
//   case "efectivo":
//     console.log("Pagaste con ${metodoPago}");
//     break;
//   case "cheque":
//     console.log("Pagaste con ${metodoPago}");
//     break;
//   default:
//     console.log("aun no has seleccionado un metodo de pago");
// }
// ---------------------------------------------------------
// // operador &&

// const usuario = true;
// const puedePagar = true;

// if (usuario && puedePagar) {
//   console.log("si puede comprar");
// } else if (!usuario) {
//     console.log('inicia sesion')
// } else if (!puedePagar) {
//     console.log("fondos insuficientes");
// }
// else{
//     console.log('No no puedes comprar')
// }

// ------------------------------------------------------

// // operador or

// const efectivo = 300;
// const credito = 1000;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// if (efectivo > totalPagar || totalPagar) {
//   console.log("si podemos pagar");
// } else {
//   console.log("Fondos insuficientes");
// }
// // -----------------------------------------------------
// // detener la ejecucion de un if

// const autenticado = true;
// if (autenticado === true) {
//   console.log("el usuario esta autenticado");
// }
// const puntaje = 500;

// function revisarPuntaje() {
//   if (puntaje > 400) {
//     console.log("excelente");
//     return;
//   } else if (puntaje > 300) {
//     console.log("Buen puntaje... felicidades");
//     return;
//   }
// }
// ------------------------------------------------------------------------------
// // operador ternario

// const autenticado = true;
// const puedePagar = false;
// console.log(
//   autenticado ? puedePagar ? "si esta autenticado y puede pagar" : "si esta autenticado, no puede pagar" : 'no esta autenticado '
// );
