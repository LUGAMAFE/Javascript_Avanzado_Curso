// // -----------------------------------------------------------------------------------
// // "DOMContentLoaded" evento que funciona cuando el documento ya esta cargado
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Documento listo");
// });
// // -----------------------------------------------------------------------------

// // eventos que ocurren con el mause
// const nav = document.querySelector(".navegacion");

// nav.addEventListener("click", () => {
//   console.log("entrando a la nevegacion");
// });

// nav.addEventListener("mouseout", () => {
//   console.log("saliendo de la nevegacion");
// });

// nav.addEventListener("click", () => {
//   nav.style.backgroundColor = "white";
// });

// // dblclick dobleclick
// // mousein pasar el mouse
// // mouseout quitar el mouse
// // mouseup cuando sueltas el mosue
// //-------------------------------------------------------------------------------
// //  evntos que suceden en el teclado

// const busqueda = document.querySelector(".busqueda");

// busqueda.addEventListener("input", (e) => {
//   console.log(e.target.value); //da el valor de lo que se esta escribiendo
// });

// // busqueda.addEventListener("keyup", () => {
// //   console.log("escribiendo...");
// // });

// // keydown cuando estas escribiendo
// // keyup cuando precionasuna tecla y sueltas la tecla
// // blur cuando seleccionas algo y lo deseleccionas
// // copy cuando copias codigo
// // paste cuando pegas
// // input todos los eventos anteriores excepto el blur

// --------------------------------------------------------------------------------------------------

// // // eventos para formularios con arrow functions y funcion anonima

// // const formulario = document.querySelector(".formulario");

// // formulario.addEventListener("submit", (e) => {
// //   e.preventDefault(); //e.preventDefault previene el evento por defecto que hace el elemento
// //   console.log(e.target.action);
// // });

// // eventos para formularios con una funcion

// const formulario = document.querySelector(".formulario");

// formulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//   e.preventDefault();
//   console.log(e.target.action);
// }
// -------------------------------------------------------------------------------------------------------

// // eventos al dar scroll

// // window.addEventListener("scroll", () => {
// //   const scrollPX = window.scrollY;//cantidad de scroll
// //   console.log(scrollPX);
// // });

// window.addEventListener("scroll", () => {
//   const premium = document.querySelector(".premium"); //cantidad de scroll
//   const ubicacion = premium.getBoundingClientRect(); //dar medidas de scroll
//   // console.log(ubicacion);
//   if (ubicacion.top < 784) {
//     console.log("el elemento ya es visible");
//   } else {
//     console.log("aun no");
//   }
// });
// ----------------------------------------------------------------------------------------------------------

// // event bubbling

// const cardDiv = document.querySelector(".card");
// const infoDiv = document.querySelector(".info");
// const titulo = document.querySelector(".titulo");

// cardDiv.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en card");
// });
// infoDiv.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en info");
// });
// titulo.addEventListener("click", (e) => {
//   e.stopPropagation(); //previene que muchos eventos se lleven a cabo al mismo tiempo si se ejecutan
//   console.log("click en titulo");
// });
// --------------------------------------------------------------------------
// // prevenir event bubbling con delegation

// const cardDiv = document.querySelector(".card");

// cardDiv.addEventListener("click", (e) => {
//   if (e.target.classList.contains("titulo")) {
//     console.log("Diste click en titulo");
//   }
//   if (e.target.classList.contains("precio")) {
//     console.log("Diste click en precio");
//   }
//   if (e.target.classList.contains("card")) {
//     console.log("Diste click en card");
//   }
// });
// -------------------------------------------------------------------------------------

// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria");
parrafo1.classList.add("concierto");

// Segundo parrafo
const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

// 3er parrafo...
const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

parrafo3.onclick = function () {
  nuevaFuncion(1);
};

// crear el div...
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

// Crear el Card..
const contenedorCard = document.createElement("div");
contenedorCard.classList.add("contenedorCard");

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(contenedorCard); // al inicio info

function nuevaFuncion(id) {
  console.log("desde nueva funcion", id);
}
