"use strict";

const gridContainer = document.querySelector(".grid-container");
const children = document.querySelectorAll(".child");
const form = document.querySelector(".input-form");
const fiberSelect = document.querySelector(".fiber-select");
const fiberSelectLabel = document.querySelector(".fiber-select-label");
const numberInput = document.querySelector(".number-input");
const resetBtn = document.querySelector(".reset-btn");
const lightBtn = document.querySelector(".light-mode");
const darkBtn = document.querySelector(".dark-mode");

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

const submitFiber = (e) => {
  e.preventDefault();

  const inputValue = +numberInput.value;
  //   console.log(inputValue);

  if (positiveNumberRange(inputValue) || !numberValidation(inputValue)) {
    alert("Please enter a positive number less than 999999");
    return false;
  }

  const fiberLoop = children.forEach(function (number, i) {
    let fibers = (number.textContent = i + inputValue);
    // console.log(fibers);
  });

  resetBtn.classList.add("pulse");

  const disabled = fiberSelect.disabled;
  disabled ? (fiberSelect.disabled = true) : (fiberSelect.disabled = true);
  fiberSelectLabel.classList.add("disabled");
};

// Input validation
const positiveNumberRange = (input) => input > 999999 || input < 0;
const numberValidation = (input) => Number.isFinite(input);

const resetApp = () => {
  location.reload();
  window.scrollTo(0, 0);
};

// Event listeners

lightBtn.addEventListener("click", function () {
  console.log("clicked");
});
darkBtn.addEventListener("click", function () {
  console.log("clicked");
});

form.addEventListener("submit", submitFiber);
fiberSelect.addEventListener("change", filterFibers);
resetBtn.addEventListener("click", resetApp);
