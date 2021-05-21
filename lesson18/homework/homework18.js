// Zadanie
// W pliku jest lista marek samochodów znajdujących się w wypożyczalni samochodowej. Wypożyczalnia ta posiada bardzo dużo aut różnej marki,
// ilość tych aut w wypożyczalni ogólnie i aktualnie(auta aktualnie niewypożyczone) oraz cenę za dzień wynajmu. Za pomocą metod na tablicach:
// a) posortuj marki aut alfabetycznie,
// b) przefiltruj marki aut z ceną za dzień poniżej 400,
// c) posortuj marki aut cenowo od najmniejszej do największej,
// d) przefiltruj tą tablicę i pokaż tylko te marki w których wszystkie auta z posiadanych są dostępne,
// e) posortuj auta względem dostępnej ilości aut(od tych gdzie jest najwięcej aut do tych gdzie jest ich najmniej)
// f) sprawdź z której wypożyczalni będziemy mogli wynająć na 7 dni auto mając do dyspozycji 3500zł,
// g) ** Wskaż jakie auta są wypożyczane najczęściej i być może należy zaopatrzyć wypożyczalnie w więcej takich aut?
// (Chodzi o stosunek w danej marce aut dostępnych w wypożyczalni ogólnie i aktualnie, gdzie procentowo zostało
// ich teraz najmniej) Wskaż 3 najczęściej wypożyczane marki aut.

const rentalCarCompany = [
  {
    name: "audi",
    allCarsNumber: 70,
    carsToRent: 30,
    price: 140,
  },
  {
    name: "fiat",
    allCarsNumber: 120,
    carsToRent: 120,
    price: 90,
  },
  {
    name: "bwm",
    allCarsNumber: 50,
    carsToRent: 50,
    price: 430,
  },
  {
    name: "ferrari",
    allCarsNumber: 3,
    carsToRent: 1,
    price: 1200,
  },
  {
    name: "mustang",
    allCarsNumber: 13,
    carsToRent: 3,
    price: 650,
  },
  {
    name: "mercedes",
    allCarsNumber: 22,
    carsToRent: 12,
    price: 340,
  },
];

// a) Sortowanie Alfabetyczne
// Metoda 1 przy pomocy funkcji
function compare(a, b) {
  return a.name < b.name ? -1 : 1;
}

let carsSortedAlphabetically1 = [...rentalCarCompany];
carsSortedAlphabetically1.sort(compare);

console.log(`Auta posortowane alfabetycznie metodą 1:`);
console.log(carsSortedAlphabetically1);

// a) Sortowanie Alfabetyczne
// Metoda 2 - zapis liniowy przy pomocy metody localeCompare którego nauczyłem się przy okazji :)
let carsSortedAlphabetically2 = [...rentalCarCompany];
carsSortedAlphabetically2.sort((a, b) => a.name.localeCompare(b.name));

console.log(`Auta posortowane alfabetycznie metodą 2:`);
console.log(carsSortedAlphabetically2);

// b) Filtrowanie: marki aut z ceną poniżej 400 za dzień
const cheapCars = rentalCarCompany.filter(function (item) {
  return item.price < 400;
});

console.log(`Auta z ceną poniżej 400 za dzień:`);
console.log(cheapCars);

// c) Sortowanie marek aut cenowo od najmniejszej do największej
function sortByPrice(a, b) {
  return a.price < b.price ? -1 : 1;
}

let carsSortedByPrice = [...rentalCarCompany];
carsSortedByPrice.sort(sortByPrice);

console.log(`Auta posortowane cenowo od najmniejszej do największej:`);
console.log(carsSortedByPrice);

// d) Filtrowanie tablicy w poszukiwaniu w ogóle niewypożyczonych aut
const availableCars = rentalCarCompany.filter(function (item) {
  return item.carsToRent === item.allCarsNumber;
});

console.log(`Aktualne auta dostępne w 100%:`);
console.log(availableCars);

// e) Sortowanie aut względem dostepnej ilości (od największej do najmniejszej)
function sortByAvailability(a, b) {
  return a.carsToRent >= b.carsToRent ? -1 : 1;
}

let carsSortedByAvailability = [...rentalCarCompany];
carsSortedByAvailability.sort(sortByAvailability);

console.log(`Auta posortowane pod względem dostępności:`);
console.log(carsSortedByAvailability);

// f) Sprawdzanie z której wypożyczalni będziemy mogli wynająć na 7 dni auto mając do dyspozycji 3500zł
const carsWeCanAffordBy7Days = rentalCarCompany.filter(function (item) {
  return item.price * 7 <= 3500;
});

console.log(`Auta które możemy wypożyczyć na 7 dni mając 3500 zł:`);
console.log(carsWeCanAffordBy7Days);

// g) Auta wypożyczone w największym % (najbardziej popularne przez wypożyczających)
function sortByPopularity(a, b) {
  return (a.allCarsNumber - a.carsToRent * 100) / a.allCarsNumber <=
    (b.allCarsNumber - b.carsToRent * 100) / b.allCarsNumber
    ? 1
    : -1;
}

let carsSortedByPopularity = [...rentalCarCompany];
carsSortedByPopularity.sort(sortByPopularity);

console.log(`Auta które wypożyczone są w największym stosunku procentowym:`);
console.log(carsSortedByPopularity);

// g) Trzy najczęsciej wypożyczane auta

function sortByRentalsNumber(a, b) {
  return a.allCarsNumber - a.carsToRent <= b.allCarsNumber - b.carsToRent
    ? 1
    : -1;
}

const result = rentalCarCompany
  .sort(sortByRentalsNumber)
  .filter(function (par1, index) {
    return index < 3;
  });

// let carsSortedByMostRented = [...rentalCarCompany];
// carsSortedByMostRented.sort(sortByRentalsNumber);

console.log(`Trzy najczęściej wypożyczane auta to:`);
console.dir(result);

// console.log(`Trzy najczęściej wypożyczane auta to:
// 1) ${carsSortedByMostRented[0].name} - w liczbie ${
//   carsSortedByMostRented[0].allCarsNumber - carsSortedByMostRented[0].carsToRent
// },
// 2) ${carsSortedByMostRented[1].name} - w liczbie ${
//   carsSortedByMostRented[1].allCarsNumber - carsSortedByMostRented[1].carsToRent
// },
// 3) ${carsSortedByMostRented[2].name} - w liczbie ${
//   carsSortedByMostRented[2].allCarsNumber - carsSortedByMostRented[2].carsToRent
// },`);
