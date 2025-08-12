const count = document.querySelector("#count"); //span
const textarea = document.querySelector("#text"); //textarea

textarea.addEventListener("input", (event) => {
//   count.textContent = textarea.value.length;
    count.textContent = event.target.value.length;
});
