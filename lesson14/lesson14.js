// obiekty

// const person = {
//   name: "Mateusz",
//   surname: "Gabriel",
//   age: 69,
// };

// function pobierzWartosc(osoba, klucz = "name") {
//   return osoba[klucz];
// }

// const name = person.name;
// const name2 = name;
// const person2 = person;

// person.name = "Matt";

// console.log(name, name2, person2.name, person.name);

// pętle

const fcBarca = [
  "Messi",
  "DeJong",
  "Ter Stegen",
  "Piqe",
  "Dembele",
  "Pinto kekw",
  "Griezmann",
];

for (let i = 0; i < fcBarca.length; i++) {
  console.log(`Gola strzelił ${fcBarca[i]}!`);
}
// map ma już w sobie te wartości wpisane powyżej
fcBarca.map(function (element) {
  console.log(`Samobója strzelił ${element}`);
});
