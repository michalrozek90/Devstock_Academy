// function obliczCene(name, price, vat) {
//   const totalPrice = price + (price * vat) / 100;
//   return `Cena produktu ${name} to ${totalPrice} PLN`;
// }

// console.log(obliczCene("Ksiazka JS", 100, 23));
// console.log(obliczCene("Ksiazka React", 80, 15));
// console.log(obliczCene("Odkurzacz", 1000, 8));
// const stawkiVAT = {
//   ksiazka: 8,
//   szkolenie: 23,
//   hotel: 13,
// };
// function obliczCene({ name, type = "ksiazka", price }) {
//   const stawkaVAT = stawkiVAT[obj.type];
//   const totalPrice = obj.price + (obj.price * stawkaVAT) / 100;
//   return `Cena produktu ${obj.type} o nazwie ${obj.name} to ${totalPrice} PLN`;
// }

// const produkt = {
//   name: "Ksiazka JS",
//   type: "ksiazka",
//   price: 100,
// };

// obliczCene(produkt);

function licznik() {
  let ile = 0;

  function zwieksz() {
    ile += 1;
  }
  function zmniejsz() {
    ile -= 1;
  }

  zwieksz();
  zwieksz();

  return {
    //   ile: ile,
    ile,
    zwieksz,
    zmniejsz,
  };
}
const instancjaLicznika = licznik();

console.log(instancjaLicznika);
