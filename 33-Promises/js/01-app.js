const paises = ["alemania", "portugal", "mexico", "marruecos"];

function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 4000);
}

function mostrarPaices() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 3000);
}

mostrarPaices();
nuevoPais("italia", mostrarPaices);
