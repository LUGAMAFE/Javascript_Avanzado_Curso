let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  //crear base de dtaos 1.0

  let crmDB = window.indexedDB.open("crm", 1);

  //si hay un error

  crmDB.onerror = function () {
    console.log("hubo un error al crear la base de datos");
  };

  //si se creo bien

  crmDB.onsuccess = function () {
    console.log("la base de datos se a creado correctamente");

    DB = crmDB.result;
  };

  //configuracion de la base de datos
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    console.log(objectStore);

    // definir las columnas

    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("columnas creadas");
  };
}

function crearCliente() {
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("transaccion completada");
  };

  transaction.onerror = function () {
    console.log("hubo un error en la transaccion");
  };
  const objectStore = transaction.objectStore("crm");

  const nuevoCliente = {
    telefono: 1230129301923,
    nombre: "juan",
    email: "correo",
  };

  const peticion = objectStore.add(nuevoCliente);

  console.log(peticion);
}
