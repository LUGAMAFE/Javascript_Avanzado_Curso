//variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  document.addEventListener("submit", agregarGasto);
}

// classes

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
    this.calcularRestante();
  }
  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }
  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    this.calcularRestante();
  }
}

class UI {
  instertarPresupuesto(cantidad) {
    //extrayendo el valor
    const { presupuesto, restante } = cantidad;
    //agregar al html
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }
  imprimirAlerta(mensaje, tipo) {
    //crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    //mensaje de error
    divMensaje.textContent = mensaje;
    //insertar en el html

    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
  mostrarGastos(gastos) {
    this.limpiarHTML(); // elimina el html previo
    //iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;
      //crear un li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevoGasto.dataset.id = id;

      //agregar un html del gasto
      nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary basge-pill"> $ ${cantidad} </span>`;

      //Boton de borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "borrar &times;";
      nuevoGasto.appendChild(btnBorrar);
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };

      //agregar al html
      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }
  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }
  comprobarPresupuesto(presupuestObj) {
    const { presupuesto, restante } = presupuestObj;

    const restanteDiv = document.querySelector(".restante");
    //comprobar 25%
    if (presupuesto / 4 > restante) {
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      restanteDiv.classList.remove("alert-success");
      restanteDiv.classList.add("alert-warning");
    } else {
      restanteDiv.classList.remove("alert-danger", "alert-warning");
      restanteDiv.classList.add("alert-succes");
    }
    //si el total es 0 menor
    if (restante <= 0) {
      ui.imprimirAlerta("el presupuesto se ha agotado", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

//instanciar

const ui = new UI();

let presupuesto;

// funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿cual es tu presupuesto?");

  console.log(presupuestoUsuario);

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }
  //presupuesto Usuario
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);
  ui.instertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();

  //leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  //validar

  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("ambos campos son obligatorios", "error");

    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("cantidad no valida", "error");
    return;
  }

  //generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() };
  //añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);
  //mensaje de todo bien
  ui.imprimirAlerta("gasto agregado correctamente");

  //imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
  //reinicia el formulario
  formulario.reset();
}

function eliminarGasto(id) {
  //elimina del objeto
  presupuesto.eliminarGasto(id);
  //elimina los gastos del html
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
}
