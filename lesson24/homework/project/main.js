let page = 1;
let info = null;
const $charactersList = document.getElementById("characters-number");

// 1.a) Pobranie tablicy postaci
async function main() {
  const charactersDownload = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character").catch(
      (err) => console.log("Ups coś poszło nie tak!")
    );
    const response = await data.json();
    console.log(response.results);
    return response;
  };

  charactersDownload();

  // 1.b) Z pobranej tablicy stwórz nową tablicę zawierającą pierwsze 10 postaci za pomocą filter lub splice,
  const showFirst10Characters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    ).catch((err) => console.error("Ups coś poszło nie tak!"));
    const data = await response.json();
    const arr = data.results;
    arr.splice(10, 20); // Usunięcie indexów między 10 a 20 spowoduje, że wyświetli się tylko 10 pierwszych wyników
    console.log(arr);
    return data;
  };

  // 1.d) Pod tytułem dodaj opis który będzie zawierał informację "Wszystkich dostępnych postaci jest X"(tutaj gdzie X wyswietl liczbe wszystkich dostepnych postaci)

  async function createCharacterCard() {
    const characters = await showFirst10Characters(); // wczytanie 10 kart postaci z backendu
    info = characters.info;
    $charactersList.innerHTML = characters.info.count; // pobranie liczby wszystkich postaci|
    characters.results.forEach(createCharacterHTML); // dodanie html dla każdej postaci
  }
  createCharacterCard();

  async function clearCharacterCard() {
    $list.innerHTML = ""; // wyczyszczenie wszystkich kart
  }

  // 2.f) Wyświetl w formie listy 10 pierwszych postaci tak aby wyświetlić imie postaci, zdjecie i typ postaci w formie opisu czyli musicie uzyć z obiektu postaci: name, image i type.
  function createCharacterHTML(data) {
    const $card = document.createElement("div");
    $card.classList = "card";

    const $img = document.createElement("img");
    $img.src = data.image;
    $img.alt = data.name;

    $card.appendChild($img);

    const $container = document.createElement("div");
    $container.classList = "container";

    const $name = document.createElement("h4");
    $name.innerHTML = data.name;

    const $species = document.createElement("p");
    $species.innerHTML = data.species;

    $container.appendChild($name);
    $container.appendChild($species);
    $card.appendChild($container);

    const $list = document.getElementById("list");
    $list.appendChild($card);
  }

  // 2.g) Wyświetl pod opisem a nad listą dwa przyciski poprzednia i następna, które będą wyświetlały kolejne 10 postaci z tablicy lub poprzednie 10, (można to zrobić obcinając tablicę lub używając nowych endpointów z dokumentacji pod które mozna podstawiac zmienne i same pobiorą nam dowolną stronę - fetch(<https://rickandmortyapi.com/api/character/?page=1))>

  const $buttonPrev = document.getElementById("prev");
  const $buttonNext = document.getElementById("next");

  $buttonPrev.addEventListener("click", async (el) => {
    if (info.prev === null) {
      alert("Jesteś na 1 stronie");
      return;
    }
    clearCharacterCard();
    page--;
    createCharacterCard();
  });

  $buttonNext.addEventListener("click", (el) => {
    if (info.next === null) {
      alert("Jesteś na ostatniej stronie");
      return;
    }
    clearCharacterCard();
    page++;
    createCharacterCard();
  });

  // 2.h) Wyświetl aktualnie na której stronie jesteśmy i ile jest maksymalnie stron w formie string nad przyciskami "Aktualna strona to X na X"
  // const $actualPage = document.getElementById("actual-page");
  // $actualPage.innerHTML = page;

  // const $pagesNumber = document.getElementById("pages-number");
  // $pagesNumber.innerHTML = obj.info.pages;
}
main();
