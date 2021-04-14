// const poleTrojkata = function (a, h) {
//   const pole = (1 / 2) * a * h;
//   return `Pole trójkąta o podstawie ${a} i wysokości ${h} wynosi ${pole}`;
// };

// const converter = function (hours, minutes, seconds) {
//   const wynik = hours * 3600 + minutes * 60 + seconds;
//   return `Ilość godzin ${hours}, minut ${minutes} oraz sekund ${seconds} w sumie daje wynik ${wynik} sekund`;
// };

// function czyMogeObejrzecFilm(wiek) {
//   if (wiek < 18 || godzina > 23) {
//     return "Nie możesz obejrzeć filmu";
//   }
//   return "Możesz obejrzeć film";
// }

// function czyMogeObejrzecFilm(wiek) {
//   return wiek < 18 ? `Nie możesz obejrzeć filmu` : `Możesz obejrzeć film`;
// }

VER 1

function canServeBeer(age, isDrunk) {
  if (age > 18 && isDrunk == false) {
    return "Proszę, oto Twoje piwo";
  } else age < 18 || isDrunk == true;
  return "Przykro mi, dzisiaj nie dostaniesz piwka";
}

VER 2

person = {
  personName: "Kasia",
  age: 30,
  isDrunk: true,
};

function canServeBeer(person) {
  if (person.age >= 18 && person.isDrunk == false) {
    return "Kasiu oto Twoje winko";
  } else if (person.age < 18 || person.isDrunk) {
  return "Kasiu przykro mi, dzisiaj nie ma winka";
  }
}

// SAMOCHODY

// .push() - dodaje element na końcu
// .pop() - odejmuje element z końca tablicy
// .shift() - odejmuje element z początku tablicy
// .unshift() - dodaje element na początku tablicy
const queue = [];

function orderCar(car, carQueue) {
  if (car && car.type) {
    carQueue.push(car);
  }
}

function produceCar(carQueue) {
  if (carQueue.length === 0) {
    console.log(`Nie ma żadnych zamówień`);
    return;
  }

  const car = carQueue.shift();
  car.mirrors = true;
  car.km = 20;
  car.engine = "v8";

  return car;
}

const ford = {
  type: "mustang",
  isDiesel: false,
};

orderCar(ford, queue);
console.log(`after`, queue);
