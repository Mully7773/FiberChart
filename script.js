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

  const disabled = fiberSelect.disabled;
  disabled ? (fiberSelect.disabled = true) : (fiberSelect.disabled = true);
};

// Input validation
const positiveNumberRange = (input) => input > 999999 || input < 0;
const numberValidation = (input) => Number.isFinite(input);

const resetApp = () => {
  location.reload();
  window.scrollTo(0, 0);
};

// Event listeners
form.addEventListener("submit", submitFiber);
fiberSelect.addEventListener("change", filterFibers);
resetBtn.addEventListener("click", resetApp);
