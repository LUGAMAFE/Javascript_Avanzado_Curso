const nombreCache = "apv-v4";

const archivos = [
  "/",
  "/index.html",
  "/error.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
];

//Cuando se instaa el service worker
self.addEventListener("install", (e) => {
  console.log("instalando el Service Worker");

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos);
    })
  );
});

//Activar el service worker
self.addEventListener("activate", (e) => {
  console.log("service worker activado");

  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//Evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch", e);

  e.respondWith(
    caches
      .match(e.request)
      .then((respuestaCache) => {
        return respuestaCache;
      })
      .catch(() => caches.match("/error.html"))
  );
});
