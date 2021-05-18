// function Moja() {}

// const twoja = new Moja();
// Moja.prototype = function () {};

const Zawodnik = function (name, lastname, age, position) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.position = position;
  this.strzał = () => console.log(`Uwaga, ${this.lastname} oddaje strzał!`);
};

const Messi = new Zawodnik("Lionel", "Messi", "29", "Napastnik");
const Griezmann = new Zawodnik("Antoine", "Griezmann", "29", "Napastnik");
const TerStegen = new Zawodnik("Marc", "Ter Stegen", "27", "Bramkarz");
const Pique = new Zawodnik("Gerard", "Pique", "31", "Obrońca");
const DeJong = new Zawodnik("Frienkie", "De Jong", "24", "Pomocnik");

Zawodnik.prototype.gol = function () {
  console.log(`${this.name} strzela gola!!!`);
};

console.log(
  `Skład na dzisiejszy mecz: ${Messi.lastname}, ${Griezmann.lastname}, ${TerStegen.lastname}, ${Pique.lastname}, ${DeJong.lastname}.`
);

console.dir(Zawodnik);
