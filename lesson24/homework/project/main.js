let page = 1;
let info = null;

async function main() {
  const charactersDownload = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    ).catch((err) => console.log("Ups coś poszło nie tak!"));
    const response = await data.json();
    console.log(response);
    return response;
  };

  charactersDownload();

  const showFirst10Characters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    ).catch((err) => console.error("Ups coś poszło nie tak!"));
    const data = await response.json();
    const arr = data.results;
    arr.splice(10, 20); // Usunięcie indexów między 10 a 20 spowoduje, że wyświetli się tylko 10 pierwszych wyników
    return data;
  };

  showFirst10Characters();

  async function createCharacterCard() {
    const characters = await charactersDownload(); // wczytanie kart postaci z API
    info = characters.info;
    $list.innerHTML = ""; // wyczyszczenie listy zawierającej karty postaci
    $actualPage.innerHTML = page; // wyświetla aktualną stronę
    $charactersList.innerHTML = characters.info.count; // pobranie liczby wszystkich postaci|
    characters.results.forEach(createCharacterHTML); // dodanie html dla każdej postaci
  }

  createCharacterCard();

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

    $list.appendChild($card);

    const $pagesNumber = document.getElementById("pages-number");
    $pagesNumber.innerHTML = info.pages;
  }

  const $charactersList = document.getElementById("characters-number");
  const $actualPage = document.getElementById("actual-page");
  const $list = document.getElementById("list");
  const $buttonPrev = document.getElementById("prev");
  const $buttonNext = document.getElementById("next");

  $buttonPrev.addEventListener("click", async (el) => {
    if (info.prev === null) {
      alert("Jesteś na 1 stronie");
      return;
    }

    page--;
    createCharacterCard();
  });

  $buttonNext.addEventListener("click", (el) => {
    if (info.next === null) {
      alert("Jesteś na ostatniej stronie");
      return;
    }

    page++;
    createCharacterCard();
  });
}
main();
