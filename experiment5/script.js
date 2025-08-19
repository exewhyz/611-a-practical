const categoryElement = document.querySelector("#category"); //select
const productElement = document.querySelector("#products"); //div

const products = [
  { name: "Tshirt", category: "clothing" },
  { name: "Laptop", category: "electronics" },
  { name: "Mobile", category: "electronics" },
  { name: "Shoes", category: "clothing" },
];

function filter(category) {
  if (category === "all") {
    return products;
  } else {
    return products.filter((prod) => {
      return prod.category === category;
    });
  }
}

categoryElement.addEventListener("change", () => {
  const filteredProducts = filter(categoryElement.value);
  const data = filteredProducts.map((value) => {
    return `<div class="pro">${value.name}</div>`;
  });
  productElement.innerHTML = data.join("");
});

const filteredProducts = filter("all");
const data = filteredProducts.map((value) => {
  return `<div class="pro">${value.name}</div>`;
});
productElement.innerHTML = data.join("");

// const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] *2;
// }

// let neww = [];
// numbers.forEach((value,index,array)=>{
//     neww.push(value *2)
// })

// const updated = numbers.map((value,index)=>{
//     return value *2;
// })

// console.log(updated);

// const filtered = numbers.filter((value) => {
//   return value % 2 !== 0;
// });

// console.log(filtered);
