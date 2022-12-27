const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumer0Multiplicar = (fn) => fn(10, 20);
console.log(sumer0Multiplicar(suma));
