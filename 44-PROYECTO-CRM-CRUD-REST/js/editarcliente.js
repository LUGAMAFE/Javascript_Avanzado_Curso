import { obtenercliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function () {
  //Campos del formulario
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const paramtrosURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(paramtrosURL.get("id"));

    const cliente = await obtenercliente(idCliente);
    mostrarcliente(cliente);

    // Submit al formulario

    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);
  });
  function mostrarcliente(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    idInput.value = id;
  }
  function validarCliente(e) {
    e.preventDefault();
    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: parseInt(idInput.value),
    };

    if (validar(cliente)) {
      //Mostrarmensaje
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    //Rescribe el objeto
    editarCliente(cliente);
  }
})();
