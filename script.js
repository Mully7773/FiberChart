"use strict";

const gridContainer = document.querySelector(".grid-container");
const children = document.querySelectorAll(".child");
const form = document.querySelector(".input-form");
const fiberSelect = document.querySelector(".fiber-select");
const numberInput = document.querySelector(".number-input");
const resetBtn = document.querySelector(".reset-btn");

// Functions
const filterFibers = function (e) {
  e.preventDefault();
  const fiberValue = +fiberSelect.value;
  console.log(fiberValue);

  const numberFilter = children.forEach(function (number, i) {
    let myNumbers = number.textContent;
    if (myNumbers >= fiberValue) {
      number.classList.add("hidden");
    }
  });
};

//Event listeners
fiberSelect.addEventListener("change", filterFibers);
