self.onload = () => {
  console.log("ventana lista");
};
window.nombre = "monitor de 20 pulgadas";
const producto = {
  precio: 30,
  disponible: true,
  mostrarInfo: function () {
    return `el producto ${self.nombre} tiene un precio de ${this.precio}`;
  },
};

console.log(producto.mostrarInfo());
