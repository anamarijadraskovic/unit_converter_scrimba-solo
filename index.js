const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

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

function renderConversion(value, {factor, unitA, unitB, outputEl}) {
    const aToB = `${value} ${unitA}${value !== 1 ? "s" : ""} = ${(value * factor).toFixed(3)} ${unitB}${value !== 1 ? "s" : ""}`;
    const bToA = `${value} ${unitB}${value !== 1 ? "s" : ""} = ${(value / factor).toFixed(3)} ${unitA}${value !== 1 ? "s" : ""}`;
    outputEl.textContent = `${aToB} | ${bToA}`;
}

convertBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const baseValue = Number(inputEl.value) || 0;
    conversions.forEach(conv => renderConversion(baseValue, conv));
});

// THEME SWITCHING
const root = document.documentElement;
const toggleThemeBtn = document.getElementById("toggle-theme-btn");

function applyTheme(theme) {
    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
    } else {
        root.removeAttribute("data-theme");
    }
}

// Get stored theme OR system preference
let theme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(theme);

// Toggle button
toggleThemeBtn.addEventListener("click", () => {
    theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    applyTheme(theme);
});

// Listen for system changes if user hasn't selected a theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});
