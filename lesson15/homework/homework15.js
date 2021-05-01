// 1
// a)
for (i = 1; i <= 9; i++) {
  console.log(i);
}
// b)
for (i = 9; i > 0; i--) {
  console.log(i);
}
// c)
for (i = 5; i <= 15; i++) {
  console.log(i);
}
// d)
for (i = 0; i >= -10; i--) {
  console.log(i);
}
// e)
for (i = 1; i <= 20; i += 2) {
  console.log(i);
}
// f)
for (i = 10; i >= -10; i -= 4) {
  console.log(i);
}
// g)
for (i = 0; i <= 100; i *= 2) {
  console.log(i);
  if (i === 0) {
    i++; // zrobiłem w ten sposób aby nigdy nie wyświetlać liczby 0 która nie jest ani parzysta ani nieparzysta
  }
}
// 2
// a)
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log(i);
  }
}
// b)
for (i = 0; i <= 20; i++) {
  if (i % 2 !== 0 && i !== 0) {
    console.log(i);
  }
}
// c)
for (i = 0; i <= 10; ++i) {
  if (i === 0) {
    i++; // zrobiłem w ten sposób aby nigdy nie wyświetlać liczby 0 która nie jest ani parzysta ani nieparzysta
  }
  const isEven = i % 2 === 0;
  console.log(
    isEven
      ? `Liczba ${i} jest liczbą parzystą`
      : `Liczba ${i} jest liczbą nieparzystą`
  );
}
// d)
for (i = 1; i <= 30; i++) {
  const Fizz = i % 3 === 0;
  const Buzz = i % 5 === 0;
  const FizzBuzz = i % 3 === 0 && i % 5 === 0;
  if (FizzBuzz) {
    console.log(`FizzBuzz`);
  } else if (Fizz) {
    console.log(`Fizz`);
  } else if (Buzz) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}
// e)
for (i = 100; i >= 0; i -= 5) {
  const divisibleBy10 = i % 10 === 0 && i !== 0;
  console.log(divisibleBy10 ? `Liczba ${i} jest podzielna przez 10` : `${i}`);
}
// 3
// a)
function createLoop(condition) {
  for (i = 0; i <= condition; i++) {
    console.log(`Aktualnie jest cyfra ${i}`);
  }
}
// b)
function createLoop2(startNumber) {
  for (i = startNumber; i <= 15; i++) {
    console.log(`Aktualnie jest cyfra ${i}`);
  }
}
// c)
function createLoop3(iterationCount) {
  for (i = 0; i <= 15; i = i + iterationCount) {
    console.log(`Aktualnie jest cyfra ${i}`);
  }
}
// d)
function createLoop4(startNumber, condition) {
  for (i = startNumber; i <= condition; i++) {
    console.log(`Aktualnie jest cyfra ${i}`);
  }
}
// e)
function createLoop5(startNumber, condition, iterationCount) {
  for (i = startNumber; i <= condition; i = i + iterationCount) {
    console.log(`Aktualnie jest cyfra ${i}`);
  }
}
// 4
// a)
const firstArray = [1, 2, 3, 4, 5];

for (i = 0; i < firstArray.length; i++) {
  console.log(firstArray[i]);
}
// b)
const namesArray = [`Jakub`, `Olaf`, `Michał`, `Janusz`];

for (i = 0; i < namesArray.length; i++) {
  console.log(`Cześć ${namesArray[i]}!`);
}
// c)
const carsArray = [
  {
    model: "Pontiac Firebird",
    color: "Czerwony",
  },
  {
    model: "Dodge Charger",
    color: "Czarny",
  },
];
for (i = 0; i < carsArray.length; i++) {
  console.log(`Przed Wami stoi ${carsArray[i].color} ${carsArray[i].model}`);
}
// d)
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i <= numbersArray.length; i++) {
  const isEven = i % 2 === 0;
  if (isEven) {
    console.log(i);
  }
}
// e)
const mixedArray = [
  5,
  "Uwaga",
  true,
  10,
  "Przekaz",
  null,
  false,
  "Podprogowy",
  undefined,
];

for (i = 0; i <= mixedArray.length; i++) {
  const myElement = mixedArray[i];
  const isString = typeof myElement === "string";
  if (isString) {
    console.log(myElement);
  }
}
// f)
const mixedArray2 = [
  6,
  "Uwaga",
  true,
  9,
  "Przekaz",
  null,
  false,
  "Podprogowy",
  undefined,
];

const emptyArray = [];

for (i = 0; i <= mixedArray2.length; i++) {
  const myElement = mixedArray2[i];
  const isNumber = typeof myElement === "number";
  if (isNumber) {
    emptyArray.push(myElement);
  }
}
// 5
// a)
const numbersArray2 = [4, 6, 10, 20];

function sumArray(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Suma podanej tablicy wynosi ${sum}`);
}

// Poniżej przykład, który wykorzystuje metodę "reduce".
function sumArray2(array) {
  let sum = numbersArray2.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}
// b)
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
const oddNumbers = [];

function sortNumbers(array) {
  for (i = 0; i < array.length; i++) {
    const myElement = array[i];
    const isEven = myElement % 2 === 0;
    isEven ? evenNumbers.push(myElement) : oddNumbers.push(myElement);
  }
  console.log(`Liczby parzyste w podanej tablicy to: ${evenNumbers}`);
  console.log(`Liczby nieparzyste w podanej tablicy to: ${oddNumbers}`);
}
// c)
function searchingForY(string) {
  for (i = 0; i < string.length; i++) {
    checkY = string.includes("y") || string.includes("Y");
  }
  console.log(checkY ? `Jest!` : `Nie ma!`);
}
// d)
function countResult(number) {
  let myNumber = number;
  for (i = number - 1; i >= 1; i--) {
    myNumber *= i;
  }
  console.log(myNumber);
}
// e)
const numbersArray3 = [1, 2, 3];
const stringsArray3 = [
  "W",
  "Szczebrzeszynie",
  "Chrząszcz",
  "Brzmi",
  "W",
  "Trzcinie",
];
const emptyArray2 = [];

function concatenation(arr, argument) {
  let sumOfNumbers = 0;
  let sumOfStrings = ``;
  let myElement = arr[0];

  if (arr.length === 0) {
    console.log("Tablica jest pusta!");
  } else {
    if (argument === "number" && typeof myElement === "number") {
      for (i = 0; i < arr.length; i++) {
        sumOfNumbers += arr[i];
      }
      console.log(`Suma liczb w naszej tablicy wynosi ${sumOfNumbers}`);
    } else if (argument === "string" && typeof myElement === "string") {
      for (i = 0; i < arr.length; i++) {
        sumOfStrings = sumOfStrings + arr[i];
      }
      console.log(
        `Suma stringów w naszej tablicy wygląda następująco: ${sumOfStrings}`
      );
    } else {
      console.log(`Drugi parametr jest nieprawidłowy!`);
    }
  }
}

// f)
const myFriends = [
  { name: "Walter", lastName: "White", hasCar: true, hasDrivingLicense: true },
  {
    name: "Jessie",
    lastName: "Pinkman",
    hasCar: true,
    hasDrivingLicense: true,
  },
  { name: "Skinny", lastName: "Pete", hasCar: false, hasDrivingLicense: true },
  {
    name: "Brandon",
    lastName: "Mayhew",
    hasCar: false,
    hasDrivingLicense: false,
  },
];

function taxiFromTheParty(arr) {
  for (i = 0; i < arr.length; i++) {
    const driver = arr[i];
    if (driver.hasCar === true && driver.hasDrivingLicense === true) {
      console.log(
        `${driver.name} ${driver.lastName} może zabrać Cię do domu z imprezy`
      );
    } else if (driver.hasCar === false && driver.hasDrivingLicense === false) {
      console.log(
        `${driver.name} ${driver.lastName} nie posiada ani samochodu, ani prawka`
      );
    } else {
      console.log(
        `${driver.name} ${driver.lastName} nie posiada samochodu lub prawka`
      );
    }
  }
}
// g)
const myTable1 = [1, 2, 3, 4, 5];
const myTable2 = ["Wojtek", "Ewa", "Ala", "Karol", "Robert"];

function addNewElement(arr, newElement) {
  for (i = 0; i < arr.length; i++) {
    const myElement = arr[i];
    isDuplicate = arr.includes(newElement);
  }
  isDuplicate
    ? console.log(`Element ${newElement} znajduje się już w tej tablicy`)
    : console.log(arr.push(newElement), arr);
}
// poprawić wszystkie `i <= length (powinno być "<")
