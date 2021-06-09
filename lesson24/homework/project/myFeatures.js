const $body = document.querySelector("body");
const $themeSwitch = document.getElementById("switch");

// const handleDarkMode = () => {
//   if (body.getAttribute("data-mode") === "light") {
//     body.setAttribute("data-mode", "dark");
//   } else {
//     body.setAttribute("data-mode", "light");
//   }
// };

const handleDarkMode2 = () => {
  $body.getAttribute("data-mode") === "light"
    ? $body.setAttribute("data-mode", "dark")
    : $body.setAttribute("data-mode", "light");
};

$themeSwitch.addEventListener("click", handleDarkMode2);
