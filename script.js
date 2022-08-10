"use strict";

const gridContainer = document.querySelector(".grid-container");
const children = document.querySelectorAll(".child");
const form = document.querySelector(".input-form");
const fiberSelect = document.querySelector(".fiber-select");
const numberInput = document.querySelector(".number-input");
const resetBtn = document.querySelector(".reset-btn");

// Functions
const filterFibers = (e) => {
  e.preventDefault();
  const fiberValue = +fiberSelect.value;

  const numberFilter = children.forEach(function (number, i) {
    let fiberNumber = number.textContent;
    if (fiberNumber >= fiberValue) {
      number.classList.add("hidden");
    }
    if (fiberNumber <= fiberValue) {
      number.classList.remove("hidden");
    }
  });
};

const submitFiber = function (e) {
  e.preventDefault();

  const inputValue = +numberInput.value;
  console.log(inputValue);

  const fiberLoop = children.forEach(function (number, i) {
    let fibers = (number.textContent = i + inputValue);
    console.log(fibers);
  });
};

const resetApp = () => {
  location.reload();
  window.scrollTo(0, 0);
};

//Event listeners
form.addEventListener("submit", submitFiber);
fiberSelect.addEventListener("change", filterFibers);
resetBtn.addEventListener("click", resetApp);
