// 1
// a)
const sum = function (a, b, c) {
  return a + b + c;
};

// b)
const triangleArea = function (a, h) {
  return `Pole trójkąta to ${
    (a * h) / 2
  } czyli ma on ${a} długości podstawy i ${h} wysokości`;
};

// c)
const howLongDrivingLicense = function (personAge, passDrivingTestAge) {
  return `Ta osoba ma prawo jazdy od ${personAge - passDrivingTestAge} lat`;
};

// d)
const fuelUsage = function (burningPer100Km, routeTraveled) {
  return `Spalimy ${(burningPer100Km * routeTraveled) / 100} litrów paliwa`;
};

// e)
const personInfo = function (name, age, childrenNumber) {
  return `${name} ma ${age} lata i ${childrenNumber} dzieci`;
};

// 2
// a)
const myTable = ["Alpha", "Beta", "Gamma"];
function returnTable(arr) {
  return arr;
}

// b)
const myTable2 = [1, 2, 3];
function returnTable2(arr) {
  return myTable[1];
}

// c)
function returnTable3(arr) {
  return `Przekazana tablica ma ${arr.length} elementów, a elementem nr 3 jest ${arr[2]}`;
}

// d)
let emptyTable = [];
function returnTable4(arr) {
  arr.push("element 1", "element 2", "element 3");
  return arr;
}

// e)
const presidentSAMCRO = {
  firstName: "Jax",
  lastName: "Teller",
  age: 35,
};

function showName() {
  return presidentSAMCRO.firstName;
}

// f)
function personDetails2(firstName, lastName, age, height) {
  return `${firstName} ${lastName} ma ${age} lat i ${height} cm wzrostu`;
}

// g)
const person = {
  firstName: "Ewa",
  age: 30,
};
function trueAge(person, newAge) {
  person.age = newAge;
  return person.age;
}

// 3
// a)
function drivingLicenseDetails(personAge, hasDrivingLicense) {
  return personAge < 18 || hasDrivingLicense === false
    ? `Nie możesz jeździć`
    : `Możesz śmiało jeździć`;
}

// b)
function word(string) {
  if (string === `Kup`) {
    return `Widzę, że zrobić zakupy`;
  } else if (string === "Sprzedaj") {
    return `Możesz tutaj swobodnie sprzedawać`;
  } else {
    return `Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj`;
  }
}

// c)
function checkNumber(number) {
  if (number > 0) {
    return `Liczba jest dodatnia`;
  } else if (number < 0) {
    return `Liczba jest ujemna`;
  } else {
    return `Liczba jest równa 0`;
  }
}

// d)
function divisibility(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return `FizzBuzz`;
  } else if (number % 3 === 0) {
    return `Fizz`;
  } else if (number % 5 === 0) {
    return `Buzz`;
  } else {
    return `Proszę wpisać liczbę podzielną przez 3 lub 5.`;
  }
}

// e)
function canWatchMovie(age, permission) {
  return age >= 15 || permission
    ? `Możesz obejrzeć film`
    : `Nie możesz obejrzeć filmu`;
}

// e)
function yesOrNo(word) {
  return word ? `Tak` : `Nie`;
}

// g)
function evenNumber(number) {
  return number % 2 === 0
    ? `Liczba ${number} jest parzysta`
    : `Liczba ${number} jest nieparzysta`;
}

// 4
// a)
const car = {
  marka: "Seat",
  model: "Toledo",
  productionYear: 2000,
  isCabrio: false,
};

const car2 = {
  marka: "FZR",
  model: "2000",
  productionYear: 3500,
  isCabrio: true,
};

function carDetails(object) {
  return object.productionYear > 2021
    ? `Auto ${object.marka} ${object.model} nie zostało jeszcze wyprodukowane`
    : `Auto ${object.marka} ${object.model} wyprodukowany w roku ${
        object.productionYear
      } ${object.isCabrio ? "jest kabrioletem" : "nie jest kabrioletem"}`;
}

// b)
const table1 = [];
const table2 = [1, 2, 3, 4, 5];

function tableCheck(arr) {
  return arr.length === 0
    ? `Pusta tablica`
    : `Tablica ma ${arr.length} elementów`;
}

// c)
personObject1 = {
  imie: "Michał",
  nazwisko: "Rożek",
  wiek: 30,
  czyLubiCzytacKsiazki: true,
  maTV: true,
};

personObject2 = {
  imie: "Krzysztof",
  nazwisko: "Ibisz",
  wiek: 18,
  czyLubiCzytacKsiazki: false,
  maTV: false,
};

bookObject = {
  tytuł: "Starzyzna",
  rodzaj: "Powieść grozy",
  iloscStron: 650,
};

function whatToDo(person, book) {
  if (person.czyLubiCzytacKsiazki) {
    return `Cześć ${person.imie}, polecam Ci przeczytać książkę ${book.tytuł}, ma tylko ${book.iloscStron} stron`;
  } else if (person.czyLubiCzytacKsiazki === false && person.maTV) {
    return `W takim razie dalej oglądaj TV`;
  } else {
    return `Nie wiem co Ci zaproponować`;
  }
}
