// Explicit Binding

function persona(el1, el2) {
  console.log(`mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
  nombre: "Juan",
};

const musicaFavorita = ["Heavy Metal", "Rock"];
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);
persona.call(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);

nuevaFn();
