// const cliente = "Juan";

// function mostrarCliente() {
//   const cliente = "pablo";
//   console.log(cliente);
// }

// console.log(cliente);

// mostrarCliente();

const obtenerCliente = () => {
  const nombre = "Juan";
  function muestraNombre() {
    console.log(nombre);
  }
  return muestraNombre;
};

const cliente = obtenerCliente();

cliente();
