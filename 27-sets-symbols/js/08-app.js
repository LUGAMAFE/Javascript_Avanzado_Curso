const ciudades = ["londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set("nombre", "juan");
datos.set("profesion", " desarollo");

//Default

for (let ciudad of ciudades) {
  console.log(ciudad);
}

//keys iterator

for (let keys of ciudades.entries()) {
  console.log(keys);
}

for (let keys of ordenes.entries()) {
  console.log(keys);
}

for (let keys of datos.entries()) {
  console.log(keys);
}

// valiues iterator
for (let value of ciudades.entries()) {
  console.log(value);
}
for (let value of ordenes.entries()) {
  console.log(value);
}
for (let value of datos.entries()) {
  console.log(value);
}
//entries iterator

for (let entry of ciudades.entries()) {
  console.log(entry);
}

for (let entry of ordenes.entries()) {
  console.log(entry);
}

for (let entry of datos.entries()) {
  console.log(entry);
}
