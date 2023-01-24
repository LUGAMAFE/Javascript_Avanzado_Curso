//Cuando se instaa el service worker
self.addEventListener("install", (e) => {
  console.log("instalando el Service Worker");
  console.log(e);
});

//Activar el service worker
self.addEventListener("activate", (e) => {
  console.log("service worker activado");
});
