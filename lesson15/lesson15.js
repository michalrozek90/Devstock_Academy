const uczniowie = [
  {
    name: "Mateusz",
    grade: 1,
  },
  {
    name: "Patryk",
    grade: 4,
  },
  {
    name: "Karol",
    grade: 1,
  },
  {
    name: "Agnieszka",
    grade: 6,
  },
  {
    name: "Kasia",
    grade: 6,
  },
];

const mateusz = uczniowie[0];
const name = mateusz.name;

for (let i = 0; i < uczniowie.length; i++) {
  console.log(`Cześć ${uczniowie[i].name}`);
  if (uczniowie[i].grade > 3) {
    console.log(`Dobra robota!`);
  }
}
