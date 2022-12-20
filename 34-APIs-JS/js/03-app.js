window.addEventListener("online", actualizarEstado());
window.addEventListener("offline", actualizarEstado());

function actualizarEstado() {
  debugger;
  if (navigator.onLine) {
    console.log("si estas conectado");
  } else {
    console.log("No estas conectado");
  }
}
