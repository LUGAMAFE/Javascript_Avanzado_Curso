//campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando;

class Citas {
  constructor() {
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }
  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }
  editarCita(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    //crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");
    //agregar clase en base al tipo de error
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    //Mensaje de error
    divMensaje.textContent = mensaje;

    //agregar al dom
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));
    //Quitar la alerta despues de 5 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 5000);
  }
  imprimirCitas({ citas }) {
    this.limpiarHTML();

    citas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;
      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;
      //scripting de los elementos de la cita
      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement("p");
      propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

      const telefonoParrafo = document.createElement("p");
      telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono: </span> ${telefono}`;
      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;
      const horaParrafo = document.createElement("p");
      horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;
      const sintomasParrafo = document.createElement("p");
      sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas: </span> ${sintomas}`;

      //boton para  eliminar esta cita
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.innerHTML = "Eliminar";
      btnEliminar.onclick = () => eliminarCita(id);
      //añadir un boton de editar
      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-info");
      btnEditar.innerHTML = "Editar";
      btnEditar.onclick = () => cargarEdicion(cita);

      //agregar los parrafos a divcita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      //agregar las citas al html
      contenedorCitas.appendChild(divCita);
    });
  }
  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UI();
const administrarCitas = new Citas();

//Registrar eventos
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("change", datosCita);
  propietarioInput.addEventListener("change", datosCita);
  telefonoInput.addEventListener("change", datosCita);
  fechaInput.addEventListener("change", datosCita);
  horaInput.addEventListener("change", datosCita);
  sintomasInput.addEventListener("change", datosCita);
  formulario.addEventListener("submit", nuevaCita);
}

// Objeto con la informacion de la cita
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

// agrega datos al obejto de cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
  e.preventDefault();
  //extraer la informacion del objeto de cita
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
  //    validar

  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los cambios son obligatorios", "error");
    return;
  }

  if (editando) {
    ui.imprimirAlerta("editado correctamente");
    //Pasar el objeto de la cita a edicion

    administrarCitas.editarCita({ ...citaObj });

    //regresar el texto del boton a su estado original
    formulario.querySelector('button[type="submit"]').textContent =
      "Crear cita";
    //quitar el modo edicion
    editando = false;
  } else {
    //generar una id unico
    citaObj.id = Date.now();
    //creando una nueva cita

    administrarCitas.agregarCita({ ...citaObj });

    //mensaje de imprimir alerta
    ui.imprimirAlerta("se agrego correctamente");
  }

  //reiniciar objeto para la validacion
  reiniciarObjeto();
  //reinicia el formulario
  formulario.reset();

  //Mostrar el html de las citas

  ui.imprimirCitas(administrarCitas);
}
function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

function eliminarCita(id) {
  //eliminar la cita
  administrarCitas.eliminarCita(id);
  //Muestre un mensaje
  ui.imprimirAlerta("La cita se elimino correctamente");
  //refrescar citas
  ui.imprimirCitas(administrarCitas);
}

//Cargar los datos y el modo edicion
function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  //llenar los imputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  //llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  //cambiar el texto del boton
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";
  editando = true;
}
