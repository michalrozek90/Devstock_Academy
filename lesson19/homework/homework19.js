// 1) zwróć sumę wszystkich elementów znajdujących się w tablicy
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumAll = array.reduce(function (a, b) {
  return a + b;
});

console.log(`Suma naszej tablicy wynosi ${sumAll}`);

// 2) zwróć sumę wszystkich parzystych elementów tablicy
const sumEvenNumbers = array
  .filter(function (a, b) {
    if (a % 2 === 0) {
      return true;
    }
  })
  .reduce(function (a, b) {
    return a + b;
  });

console.log(`Suma elementów parzystych wynosi: ${sumEvenNumbers}`);

// 2) - metoda skrócona
const sumEvenNumbers2 = array.filter((x) => !(x % 2)).reduce((a, b) => a + b);

console.log(
  `Suma elementów parzystych wynosi: ${sumEvenNumbers2} (metoda skrócona)`
);

// 3) zwróć sumę wszystkich elementów tablicy + 10 (10 dodaj za pomocą initialValue)
const sumAllWithInitValue = array.reduce(function (a, b) {
  return a + b;
}, 10);

console.log(`Suma tablicy z initial value = 10 wynosi: ${sumAllWithInitValue}`);

// 4) Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue

/*
Accumulator bez podanej "initial value" jest pierwszą wartością w tablicy
Accumulator z podaną "initial value" jest nową wartością dodaną do początku tablicy
*/

/* 5) Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?

Pierwszy element naszej tablicy zawsze ma index = 0 ponieważ initialValue nie posiada swojego własnego indexu. Funkcja zaczyna iterację od elementu drugiego w przypadku gdy nie podamy initialValue (czyli od indexu = 1) a gdy podamy initialValue funkcja iteruje od elementu pierwszego (czyli od indexu = 0).
*/

//6) Napisz pętle for która będzie miała takie samo działanie jak pętla reduce(pokazane było na live)
function reduce2(fn, initialValue) {
  let suma;
  let index;
  if (initialValue !== undefined) {
    suma = initialValue;
    index = 0;
  } else {
    suma = this[0];
    index = 1;
  }
  for (let i = index; i < array.length; i++) {
    const item = this[i];
    suma = fn(suma, item);
  }
  return suma;
}

function sumuj(suma, number) {
  return suma + number;
}

Array.prototype.reduce2 = reduce2;

const sum2 = array.reduce2(sumuj, 0);
console.log(`suma reduce2 to ${sum2}`);

/////////////////////////////////////////////////
const someArray = [11, 3, 5, 31, 31, 54, 23, 14];

// 7) zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50,
const isBiggerThan50 = someArray.some((element) => element > 50);
console.log(
  `Czy w tablicy zawierającej liczby: ${someArray} występuje liczba większa niż 50? Odpowiedź to: ${isBiggerThan50}`
);

// 8) zwróć true jeśli w tablicy każdy element jest większy od 2
const isBiggerThan2 = someArray.every((element) => element > 2);
console.log(
  `Czy w tablicy zawierającej liczby: ${someArray} każdy element jest większy niż 2? Odpowiedź to: ${isBiggerThan2}`
);

// 9) Jaka jest różnica między some i every?
/*
Metoda some() zwraca true lub false jeśli KTÓRYKOLWIEK element naszej tablicy spełnia warunek w funkcji.
Metoda every() zwraca true lub false tylko wtedy, gdy WSZYSTKIE elementy naszej tablicy spełniają warunek w funkcji.
*/

// 10) sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że w tablicy znajduje się element podzielny przez 7,
const isDivisibleBy7 = someArray.some((element) => element % 7 === 0);
console.log(
  `Czy w tablicy zawierającej liczby: ${someArray} jest element podzielny przez 7? Odpowiedź to: ${isDivisibleBy7}`
);

// 11) stwórz metodę some za pomocą pętli for
const smallerThan10 = some((element) => element < 10);

function some(fn) {
  for (let i = 0; i < someArray.length; i++) {
    const element = someArray[i];
    if (fn(element)) {
      return true;
    }
  }
  return false;
}

// 12) stwórz metodę every za pomocą pętli for,
const biggerThan1 = every((element) => element > 1);

function every(fn) {
  for (let i = 0; i < someArray.length; i++) {
    const element = someArray[i];
    if (!fn(element)) {
      return false;
    }
  }
  return true;
}

// Stwórz funkcję, która:

// 13) przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof)
function sumNumbers(arr) {
  const sum = arr
    .filter((x) => typeof x === "number")
    .reduce((acc, el) => acc + el);
  return sum;
}

// 14) przyjmuje dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element tablicy od następnego
function substraction(arr, initialValue) {
  const result = arr.reduce((acc, el) => acc - el, initialValue);
  return result;
}

// 15) przyjmuje dwa parametry(tablicę i wartość której szukamy w tej tablicy). Funkcją powinna nam zwrócić true jeśli w tablicy znajdzie się ta wartość
function searching(arr, wantedItem) {
  const result = arr.includes(wantedItem);
  return result;
}

// 16) Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami: (model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem

const Car = function (model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => {
    console.log(`Wybrałeś samochód marki ${model}.`);
  };
};

const ChevroletMaster = new Car("Chevrolet Master", 1938, "Beige");
const LincolnContinental = new Car("Lincoln Continental", 1942, "Black");

console.dir(ChevroletMaster);
ChevroletMaster.drive();

console.dir(LincolnContinental);
LincolnContinental.drive();

// 17) Co robi słówko kluczowe New i kiedy możemy go użyć?
/*
Operator new tworzy nową instancję typu obiektu określaną przez użytkownika lub instancję wbudowanego typu obiektu, który posiada konstruktor.
*/

// 18) Za pomocą prototype dodaj dwie funkcje do konstruktora car, tankFuel i stop, które będą wypisywać w konsoli dowolny napis,
Car.prototype.tankFuel = function () {
  console.log(`Tankowanie samochodu o kolorze ${this.color}`);
};
Car.prototype.stop = function () {
  console.log(`Zatrzymanie samochodu ${this.model}`);
};

ChevroletMaster.tankFuel();
LincolnContinental.stop();
