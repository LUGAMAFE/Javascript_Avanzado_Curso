const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;
  if (descuento) {
    resolve("descuento aplicado");
  } else {
    reject("no se pudo aplicar el descuento");
  }
});

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

// hay tres valores posibles:
// fulfilled - el psomise se cumplio
// reject elpromise no se cumplio
// pending no se ha cuplido y tampoco ha sido rechazado
