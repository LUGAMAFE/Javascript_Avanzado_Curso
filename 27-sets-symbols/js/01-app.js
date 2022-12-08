const camisa = new Set();

camisa.add("mangas");
camisa.add("mangas2");
camisa.add("mangas3");
camisa.add("mangas4");

console.log(camisa);

console.log(camisa.delete("guitarra"));

// console.log(camisa.has('guitarra'))

console.log(camisa.size);

camisa.forEach((producto, index, pertenece) => {
  //   console.log(producto);
  console.log(pertenece);
});

const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);
