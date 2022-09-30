// let elemento;

// elemento = document;
// elemento = document.all;
// elemento = document.all[0];
// elemento = document.head;
// elemento = document.body;
// elemento = document.domain;
// elemento = document.URL;
// elemento = document.characterSet;
// elemento = document.contentType;
// elemento = document.forms;
// elemento = document.forms[0];
// elemento = document.forms[0].id;
// elemento = document.forms[0].method;
// elemento = document.forms[0].action;

// elemento = document.links;
// elemento = document.links[4].id;
// elemento = document.links[4].className;
// elemento = document.forms[4].classList;
// elemento = document.forms[4].classList[0];

// elemento = document.images;

// elemento = document.scripts;
// elemento = document.scripts[2].getAttribute("src");

// console.log(elemento);

// // -------------------------------------------------------------------------------------

// // seleccionar elementos por su clase...

// // Seleccionando el header...

//                 // Todos tus selectores inician con document...
// const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas...
// console.log(header);

// const hero = document.getElementsByClassName('contenido-hero');
// console.log(hero);

// // Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
// const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);

// // Si una clase no existe, no va a retornar nada...
// const noExiste = document.getElementsByClassName('no-existe');
// console.log(noExiste);

// // ---------------------------------------------------------------------------

// //  seleccionar un elemento por su ID, recuerda los ID's solo se deben utilizar uno con ese mismo nombre por documento...

// const formulario = document.getElementById('formulario');
// console.log(formulario);

// // Si no exist estará vacio

// const noExiste = document.getElementById('no-existe');
// console.log(noExiste);

// // Añadir un ID 2 veces, seleccionara el primero que encuentre...
// -----------------------------------------------------------------------------------------------------

// // querySelectorAll

// // la buena noticia es que la sintaxis para selectores es la misma, es decir similar a CSS, con el punto para las classes y el numeral o signo de gato para los ID's, también puedes añadir un selector especifico..

// // Pero la diferencia principal, es que querySelectorAll va a retornar todos los elementos que concuerden con el selector y no va a limitarte al primero como querySelector.

// // En nuestro HTML hay muchos cards, cuando utilizamos querySelector vimos que retornaba unicamente el primero..

// const cards = document.querySelectorAll(".card");
// console.log(cards);

// // si recuerdas tenemos dos elementos con el id de formulario

// const formularios = document.querySelectorAll("#formulario");
// console.log(formularios); // Puedes ver quue eso si funciona, sin embargo recuerda que no rescomendable tener el mismo ID más de una vez por docuemnto...

// // Si no hay elementos no va a retornar nada

// // Si un selector no existe,
// const noExiste = document.querySelectorAll("#no-existe");
// console.log(noExiste);

// // --------------------------------------------------------------

// // Seleccionar elementos del DOM nos va a permitir modificar nuestro HTML y hacerlo más interactivo..

// // Veamos por ejemplo como modificar el texto de la parte superior..

// // Primero tenemos que seleccionarlo...

// const encabezado = document.querySelector(".contenido-hero h1");
// // console.log(encabezado);

// // Si deseas acceder al texto hay 3 formas de hacerlo...
// console.log(encabezado.innerText);
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML);

// // Cual es la diferencia entre estas 3... bueno, si le ponemos a ese elemento visibility: hidden; en el CSS,

// // Puedes ver que innerText no puede acceder a ese contenido...

// // Ahora, si añadimos algo de HTML,

// // TextContent va a ignorar esas etiquetas HTML y traer solo el texto, mientras que innerhTML si se trae el HTML..

// // ahora también puedes tener algo de encadenamiento o chaining...
// const textoEncabezado =
//   document.querySelector(".contenido-hero h1").textContent;
// console.log(textoEncabezado);

// // Ahora, aquí puedes ver que estoy asignando el Texto a una variable, pero también puedes modificarlo de diferentes formas...

// document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

// // otra opción seria con una variable.

// const nuevoTexto = "Nuevo Heading";
// document.querySelector(".contenido-hero h1").textContent = nuevoTexto;

// // También puedes cambiar una imagen...

// // No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...

// const imagen = document.querySelector(".card img");
// console.log(imagen.src);
// // Cambiar la imagen...
// imagen.src = "img/hacer2.jpg";

// // ---------------------------------------------------------------------------

// // En JavaScript también es posible cambiar el CSS de un elemento, o agregar o quitar classes...

// // Vamos a cambiar el color de texto del h1

// const heading = document.querySelector("h1");

// // y hay todo un objeto con propiedades CSS que puedes utilizar, si quieres conocerlas todas coloca...
// console.log(heading.style);

// // heading.style.backgroundColor = 'red'; //  Nota como las propiedades que le puedes pasar, son similares a las de CSS, con la diferencia de que el guion se elimina y la segunda palabra su primer letra es mayuscula.

// // heading.style.textTransform = 'uppercase';
// // heading.style.fontFamily = 'Arial';

// // Ahora yo no recomiendo que pongas style, ya que tu archivo JS será muy grande, otra desventaja es que la apariencia debe ser algo que sea responsabilidad del CSS, pero lo que si puedes hacer es agregar o quitar classes..

// // Vamos a seleccionar el primer card, puedes ver que tiene un parrafo con una categoria llamada concierto, eso le cambia el color:
// const card = document.querySelector(".card");
// console.log(card);
// console.log(card.classList); // Classlist nos permitirá listar las classes
// card.classList.add("nueva-clase"); // te permitirá añadir una clase.. // si deseas añadir múltiples classes debes agregar una coma en cada una

// // ahora si deseas eliminar una clase utilizas.remove
// card.classList.remove("card"); // de la misma forma si deseas remover múltiples classes tendrías que hacerlo agregando una coma
