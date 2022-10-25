const diahoy = new Date();

moment.locale("es");

console.log(moment().format("MMMM Do YYYY h:mm:ss a"));

console.log(moment().format("LLLL", diahoy));
console.log(moment().add(3, "days").calendar());
