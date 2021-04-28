// 1
const car1 = {
  brand: "fiat",
  model: "126p",
  productionYear: 1972,
};

const car2 = ["fiat", "126p", 1972];

function showCar(obj) {
  return `Nasz samochód to ${obj.brand} ${obj.model} a wyprodukowany został w roku ${obj.productionYear}`;
}

function showCar2(brand, model, productionYear) {
  return `Nasz samochód to ${brand} ${model} a wyprodukowany został w roku ${productionYear}`;
}

// 2
const { brand, model, productionYear } = car1;

// 3
function showCar3({ brand, model, productionYear }) {
  return `Nasz samochód to ${brand} ${model} a wyprodukowany został w roku ${productionYear}`;
}

// 4
let x = 5;
console.log(x++); //Log pokaże 3 - postinkrementacja najpierw zwraca wartość zmiennej, a dopiero potem ją modyfikuje
console.log(x); //Log pokaże 4 (wartość dopiero w tej linii jest modyfikowana)

console.log(++x); //Log pokaże 7 - preinkrementacja najpierw modyfikuje wartość i dopiero wtedy ją zwraca
console.log(x); //Log pokaże 7 (wartość została zmodyfikowana w poprzedniej linii)

// 5
function kosz() {
  const stan = {
    aktualnyWynik: 0,
  };
  function rzutZaDwaPkt() {
    stan.aktualnyWynik += 2;
  }
  function rzutZaTrzyPkt() {
    stan.aktualnyWynik += 3;
  }
  function pokazWynik() {
    console.log(`Aktualny wynik to ${stan.aktualnyWynik} pkt`);
  }

  return {
    pokazWynik,
    rzutZaTrzyPkt,
    rzutZaDwaPkt,
  };
}

const play = kosz();
play.rzutZaTrzyPkt();
play.rzutZaDwaPkt();
play.rzutZaDwaPkt();
play.pokazWynik();

// 6
const pralka = {
  nazwa: "bosch",
  liczbaFunkcji: 9,
  information() {
    return `Pralka marki ${pralka.nazwa} posiada ${pralka.liczbaFunkcji} funkcji`;
  },
};

// 7
// Typy wartościowe są kopiowane poprzez ich wartość a typy referencyjne nie przechowują żadnej wartości, przechowują tylko referencję (tzn. adres w pamięci do odpowiedniego obiektu) dlatego typy referencyjne są kopiowane poprzez tą referencję.

// Przykład 1 - typy proste:
let a = 5;
let b = x;
x = 8;
console.log(a); //8
console.log(b); //5
// Przypisując "5" do "x" a potem przypisując (kopiując) "x" do "y" silnik JS pamięta, że w momencie przypisania wartość "x" była równa "5" i kolejne zmiany "x" nie mają już bezpośredniego wpływu na "y".

// Przykład 2 - typy złożone:
let c = { value: 5 };
let d = c;
x.value = 8;
console.log(c.value); //8
console.log(d.value); //8
// Stosując ten sam mechanizm na typach referencyjnych (złożonych) przypisujemy referencję obiektu czyli wskazanie na dany obiekt. W tym przypadku do "y" przypisaliśmy referencję obiektu "x". Od tej pory "x" oraz "y" wskazują na tą samą referencję (zczytują wartość z tego samego miejsca) więc jeżeli zostanie ona zmieniona to wartości w obu zmiennych pokażą tą samą, zmienioną wartość. Od tej pory każda zmiana w "x" powoduje zmianę również w zmiennej "y" i odwrotnie.

// Typy proste (zwane prymitywnymi) to: number, string, boolean, undefined oraz null
// Typy referencyjne (zwane złożonymi) to: object, function oraz array
