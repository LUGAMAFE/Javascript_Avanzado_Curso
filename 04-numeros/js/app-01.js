// const numero6 = 20;
// const numero7 = "20";

// const numero1 = 30;
// const numero2 = 20;
// const numero3 = 20.2;
// const numero4 = 0.10213;
// const numero5 = -3;

// const numero8 = new Number(20);
// console.log(numero8);

// // Operaciones
// let resultado;

// // Suma
// resultado = numero1 + numero2;
// // Resta
// resultado = numero1 - numero2;
// // Mult
// resultado = numero1 * numero2;
// // Division
// resultado = numero1 / numero2;
// // Modulo
// resultado = numero1 % numero2;

// console.log(resultado);

// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

let resultado;

// Pi
resultado = Math.PI;
// redondeo
resultado = Math.round(2.5);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
// Raiz cuadrada
resultado = Math.sqrt(144);
// Abssoluto
resultado = Math.abs(-300);
// Potencia
resultado = Math.pow(8, 3);
// Minimo
resultado = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
// Max
resultado = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
// Aleatorio
resultado = Math.random();
// Aleatorio dentro de un rango:
resultado = Math.floor(Math.random() * 30);

console.log(resultado);

// El Orden en que se ejecutan las operaciones en JavaScript es igual que en la escuela

// let resultado
// El orden de las operaciones

resultado = 20 + 30 * 2;
resultado = (20 + 30) * 2;

// 20% De descuento en un carrito de compra.
resultado = (20 + 10 + 30 + 40 + 50) * 0.2;

console.log(resultado);
