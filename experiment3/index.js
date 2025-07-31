//add dark class to html tag when checkbox data change

const checkbox = document.querySelector("input[type=checkbox]");
const html = document.querySelector("html");
checkbox.addEventListener("change", () => {
  html.classList.toggle("dark");
});
