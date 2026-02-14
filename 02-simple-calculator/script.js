let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");

let result = document.getElementById("result");

addBtn.addEventListener("click", function () {
  let sum = Number(num1.value) + Number(num2.value);
  result.innerText = "Result: " + sum;
});

subBtn.addEventListener("click", function () {
  let diff = Number(num1.value) - Number(num2.value);
  result.innerText = "Result: " + diff;
});

mulBtn.addEventListener("click", function () {
  let product = Number(num1.value) * Number(num2.value);
  result.innerText = "Result: " + product;
});

divBtn.addEventListener("click", function () {
  let division = Number(num1.value) / Number(num2.value);
  result.innerText = "Result: " + division;
});
