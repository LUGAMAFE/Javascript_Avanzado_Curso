const suma = (a, b, c) => {
  return a + b + c;
};

// const parcial = (a) => (b, c) => {
//   return suma(a, b, c);
// };

// const primerNumero = parcial(5);

// const resultado = primerNumero(4, 5);

// console.log(resultado);

const parcial = (a) => (b) => (c) => {
  return suma(a, b, c);
};

// const primerNumero = parcial(5);

// const segundoNumero = primerNumero(5);

// const tercerNumero = segundoNumero(5);

// console.log(tercerNumero);

const resultadoParcial = parcial(5)(4)(3);

console.log(resultadoParcial);
