if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registrado) => console.log("se instalo correctamente", registrado))
    .catch((error) => console.log("fallo la instalacion", error));
} else {
  console.log("Service Workers no soportados");
}

//Evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch", e);
});
