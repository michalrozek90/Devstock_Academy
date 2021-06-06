/* 1) Co oznacza, że kod może być asynchroniczny?

Kod asynchroniczny to taki, który może wykonywać się równocześnie z innym kodem na raz (nie wstrzymuje wykonywania się programu, wykonuje się gdy operacja się zakończy i program zostanie o tym poinformowany). Zamiast wykonywać się linijka po linijce możemy dzięki temu wykonywać kilka funkcjonalności na raz np. pobrać jakieś dane, wysyłać informacje czy wyświetlić popup w odpowiednim momencie.
*/

// 2) Pobierz tablicę postaci z powyższego endpointa i wyświetl ją w consoli za pomocą Promise
// 3) Dodaj zabezpieczenie do powyższego podpunktu tak aby w przypadku błędu wyświetlić w konsoli napis "Ups coś poszło nie tak!", przetestuj to dodając dowolne litery do enpointy aby był nieprawidłowy i sprawdź czy napis się wyświetli

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((response) => console.log(response.results))
  .catch((err) => {
    console.log(`Ups coś poszło nie tak! Przyczyną jest - ${err} 💩`);
  });

// 4)

const readFile = async () => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character"
  ).catch(
    (err) =>
      console.error(
        "Ups coś poszło nie tak! Przyczyną jest - ",
        Error(err) + " 💣"
      ) // - zwracam tutaj obiekt błędu aby w konsoli przejrzyście było widać w której linijce występuje błąd (zostawiłem sobie na przyszłość :D )
  );
  const data = await response.json();
  console.log(data.results);
};
readFile();

// 5) Znajdź na stronie The Rick and Morty API jak pobrać pojedyńczą postać i pobierz jedną postać w dowolny sposób
const readOneCharacter = async () => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/2"
  ).catch((err) =>
    console.log(`Ups coś poszło nie tak! Przyczyną jest - ${err} 💀`)
  );

  const data = await response.json();
  console.log(data);
};
readOneCharacter();
