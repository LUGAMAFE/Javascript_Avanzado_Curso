const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    console.log("el resultado es", resultado);
  });
});

const verNotificacion = document.querySelector("#verNotificacion");

verNotificacion.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    debugger;
    const notificacion = new Notification("esta es la nueva notificacion", {
      icon: "img/ccj.png",
      body: "codigo con juan aprende proyectos reales",
    });
    notificacion.onclick = function () {
      window.open("https://www.codigoconjuan.com");
    };
  }
});
