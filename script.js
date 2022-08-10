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
const mainBody = document.querySelector("body");
const header = document.querySelector("header");
const appTitle = document.querySelector(".app-title");
const flexForm = document.querySelector(".flex-form");
const inputs = document.querySelector(".inputs");
const numberInputLabel = document.querySelector(".number-input-label");
const label = document.querySelector("label");
const footer = document.querySelector("footer");

const darkMode = localStorage.getItem("dark-mode");

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

const enableLightMode = () => {
  mainBody.classList.remove("dark-body");
  header.classList.remove("dark-header");
  appTitle.classList.remove("dark-app-title");
  lightBtn.classList.remove("dark-logo");
  darkBtn.classList.remove("dark-logo");
  flexForm.classList.remove("dark-flex-form");
  inputs.classList.remove("dark-inputs");
  label.classList.remove("dark-label");
  numberInputLabel.classList.remove("dark-label");
  footer.classList.remove("dark-footer");

  localStorage.setItem("dark-mode", "disabled");
};

const enableDarkMode = () => {
  mainBody.classList.add("dark-body");
  header.classList.add("dark-header");
  appTitle.classList.add("dark-app-title");
  lightBtn.classList.add("dark-logo");
  darkBtn.classList.add("dark-logo");
  flexForm.classList.add("dark-flex-form");
  inputs.classList.add("dark-inputs");
  label.classList.add("dark-label");
  numberInputLabel.classList.add("dark-label");
  footer.classList.add("dark-footer");

  localStorage.setItem("dark-mode", "enabled");
};

if (darkMode === "enabled") {
  // Note that on desktop transition into darkmode appears 1s before darkmode is initiated
  enableDarkMode();
}

// Event listeners

lightBtn.addEventListener("click", enableLightMode);
darkBtn.addEventListener("click", enableDarkMode);
form.addEventListener("submit", submitFiber);
fiberSelect.addEventListener("change", filterFibers);
resetBtn.addEventListener("click", resetApp);
