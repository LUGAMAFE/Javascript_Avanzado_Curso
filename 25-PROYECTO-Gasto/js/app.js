//variables y selectores
const formulario = document.querySelector("agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// clases

// funciones

function preguntarPresupuesto() {
  const presupuestoUsiario = prompt("¿cual es tu presupuesto?");
}

console.log(presupuestoUsiario);

if (
  presupuestoUsiario === "" ||
  presupuestoUsiario === null ||
  isNaN(presupuestoUsiario) ||
  presupuestoUsiario <= 0
) {
  window.location.reload();
}
