// añandir datos al local storage

localStorage.setItem("nombre", "alfonso");

const producto = {
  nombre: "Monitor de 24 Pulgadas",
  precio: 300,
};

const productoString = JSON.stringify(producto);

localStorage.setItem("producto", productoString);

const meses = ["enero", "febrero", "marzo"];

const mesesString = JSON.stringify(meses);

localStorage.setItem("meses", mesesString);

// ---------------------------------------------
// obtener datos del local storage

const meses2 = localStorage.getItem("meses");
console.log(meses2);

const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON));

localStorage.removeItem("nombre");

// ------------------------------------------------

const mesesArray = JSON.parse(localStorage.getItem("meses"));
mesesArray.push("nuevo mes");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(meses.stringify));
