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
// ---------------------------------------------------------------------------------------------
// // Traversing the DOM

// // Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);

// // Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
// console.log(navegacion.childNodes);

// // también existe algo llamado Children
// console.log(navegacion.children)

// // La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...

// // Hay mucha información aqui...
// console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
// console.log(navegacion.children[0].nodeName) // Que etiqueta es...

// // Por ejemplo si selecciono el primer card...

// const card = document.querySelector('.card');
// console.log(card.nodeType);
// console.log(card.nodeName);

// // 1 = Elemento
// // 2 - Atributo
// // 3 - Text node
// // 8 - Commentario
// // 9 - Documento
// // 10 doctype

// // en javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...

// console.log(card.children);

// // Si quieres acceder a ese div con la clase de info puedes colocar...
// console.log(card.children[1]);

// // Si quieres accedera  los elementos hijos de ese info... recuerda puedes anidar las propiedades.
// console.log(card.children[1].children[1]);

// // Acceder al titulo
// console.log(card.children[1].children[1].textContent);

// // Modificar ese titulo con un traversing
// card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'

// // Intenta cambiar el texto que dice concierto por algo más siguiendo esta sintaxis de ir navegando por el DOM...

// // No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...
// console.log(card.children);
// console.log(card.children[0]);
// console.log(card.children[0].src);

// // Cambiar la imagen...
// card.children[0].src = 'img/hacer2.jpg';

// // Children es una buena forma de acceder a los elementos por su posición, pero supongamos que de nuestra navegación queremos acceder al primer o último enlace...

// console.log(navegacion.lastChild);
// console.log(navegacion.lastElementChild);

// // Si desesa acceder al primero
// console.log(navegacion.firstChild)
// console.log(navegacion.firstElementChild);

// // Cambiar el primer texto...
// navegacion.firstElementChild.textContent = 'Nuevo Enlace...'
// +

// // JavaScript también te permite seleccionar un elemento hijo e ir navegando hacia el padre...

// // vamos a seleccionar el primer enlace...
// const enlace = document.querySelector('a');
// console.log(enlace);

// // Hay diferente sformas...

// console.log(enlace.parentNode)
// console.log(enlace.parentElement)

// // En algunos casos ambos van a dar el mismo resultado, en otros recuerda el espacio es importante...

// // También puedes ir al padre del padre...
// console.log(enlace.parentElement.parentElement)

// // En JavaScript también es posible de hacer traversing a elementos que estan en el mismo nivel , digamos el vecino aunque en javascript se les conoce como hermanos...

// console.log(enlace);
// console.log(enlace.nextElementSibling);
// console.log(enlace.nextElementSibling.nextElementSibling);

// console.log(card.nextElementSibling);

// // También hay una forma de ir digamos en la otra dirección...

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard)

// console.log(ultimoCard.previousElementSibling);

// -------------------------------------------------------------------------------------------------------

// // Después de una super extensa explicación de Traversing y acceder a elementos, veamos como eliminar elementos del DOM

// // Es muy común no? cuando borras una foto de facebook o un tweet se elimina automaticamente, también cuando quitas elementos del carrito de compras de amazon.

// // Cuando le diste me gusta a una foto por accidente y le quitas el like, también hay un cambio, así que sin duda eliminar elementos llega a ser muy común..

// // Hay 2 formas de eliminar, una es eliminar un elemento por si mismo y la otra es eliminarlo desde el padre...

// const primerEnlace = document.querySelector('a');
// primerEnlace.remove();

// // La otra forma es por el padre..
// const navegacion = document.querySelector('.navegacion');

// // el sigueinte paso es identificar el elemento a borrar..

// // console.log(navegacion.children);

// // navegacion.removeChild(navegacion.children[2]);

// // Otra forma es creando una variable...

// const borrar = navegacion.children[2]
// navegacion.removeChild(borrar);

// //  hay 2 formas de eliminar elementos, uno es por el elemento por si mismo y el otro requiere el padre y la referencia del hijo..

// --------------------------------------------------------------------------------------------

// // creación de HTML desde JavaScript..

// // Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, de ahi la gente comienza a darle me gusta, así que veamos como hacerlo generar HTML desde JavaScript...

// // Y no te preocupes si todo lo que vemos en este video no queda claro, estaremos practicando mucho lo que es el DOM Scripting ya con muchos otros proyectos...

// // Vamos a crear un nuevo enlace... lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...

// const enlace = document.createElement('A');

// // Segundo paso es crear el texto del enlace no? lo haremos con textContent

// enlace.textContent = 'Nuevo Enlace';

// // Despues vamos a asignar una ruta
// enlace.href = '/nuevo-enlace';
// // Finalmente se agrega el enlace donde deseas mostrarlo...

// // Si quieres agregar una clase

// enlace.classList.add('enlace');

// enlace.setAttribute('data-enlace', 'nuevo-enlace')

// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);

// console.log(enlace);

// // Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards... sin duda será algo más complejo...

// // crear los 3 parrafos.

// const parrafo1 = document.createElement('P');
// parrafo1.textContent = 'Concierto';
// parrafo1.classList.add('categoria');
// parrafo1.classList.add('concierto');

// // Segundo parrafo
// const parrafo2 = document.createElement('P');
// parrafo2.textContent = 'Concierto de Rock';
// parrafo2.classList.add('titulo');

// // 3er parrafo...
// const parrafo3 = document.createElement('p');
// parrafo3.textContent = '$800 por pesrona';
// parrafo3.classList.add('precio');

// // crear el div...
// const info = document.createElement('div');
// info.classList.add('info');
// info.appendChild(parrafo1)
// info.appendChild(parrafo2)
// info.appendChild(parrafo3);

// // Vamos a crear la imagen
// const imagen = document.createElement('img');
// imagen.src = 'img/hacer2.jpg';

// // Crear el Card..
// const card = document.createElement('div');
// card.classList.add('card');

// // Vamos a asignar la imagen al card...
// card.appendChild(imagen);

// // y el info
// card.appendChild(info);

// // Insertarlo en el HTML...
// const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card); // al inicio info

// console.log(parrafo1);
// console.log(parrafo2);
// --------------------------------------------------------------------------------------

// // No siempre se esta haciendo traversing a tu dom,

// const btnFlotante = document.querySelector('.btn-flotante');

// const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', mostrarOcultarFooter);

// function mostrarOcultarFooter() {
//     if( footer.classList.contains('activo') ) {
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
//         this.textContent = 'Idioma y Moneda';
//     } else {
//         footer.classList.add('activo');
//         this.classList.add('activo');
//         this.textContent = 'X Cerrar';
//     }
// }
