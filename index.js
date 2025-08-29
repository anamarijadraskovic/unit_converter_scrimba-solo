const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

const conversions = [
    {
        factor: meterToFeet,
        unitA: "meter",
        unitB: "feet",
        outputEl: lengthEl
    },
    {
        factor: literToGallon,
        unitA: "liter",
        unitB: "gallon",
        outputEl: volumeEl
    },
    {
        factor: kiloToPound,
        unitA: "kilo",
        unitB: "pound",
        outputEl: massEl
    },
]

function renderConversion (value, { factor, unitA, unitB, outputEl}) {
    const aToB = `${value} ${unitA}${value !== 1 ? "s" : ""} = ${(value * factor).toFixed(3)} ${unitB}${value != 1 ? "s" : ""}`;
    const bToA = `${value} ${unitB}${value !==1 ? "s" : ""} = ${(value / factor).toFixed(3)} ${unitA}${value != 1 ? "s" : ""}`;
    outputEl.textContent = `${aToB} | ${bToA}`;
}

convertBtn.addEventListener("click", () => {
  const baseValue = Number(inputEl.value) || 0;
  conversions.forEach(conv => renderConversion(baseValue, conv));
});

// THEME SWITCHING
const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const root = document.documentElement;

toggleThemeBtn.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");  // back to light
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
}
