const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value ?? "0"

    let meterToFeetText = `${baseValue} meter = ${Number(baseValue) * meterToFeet} feet`
    let feetToMeter = `${baseValue} feet = ${Number(baseValue) / meterToFeet} meter`
    lengthEl.textContent = `${meterToFeetText} | ${feetToMeter}`

    let literToGallonText = `${baseValue} liters = ${Number(baseValue) * literToGallon} gallons`
    let gallonToliter = `${baseValue} gallons = ${Number(baseValue) / literToGallon} liters`
    volumeEl.textContent = `${literToGallonText} | ${gallonToliter}`

    let kilosToPounds = `${baseValue} kilos = ${Number(baseValue) * kiloToPound} pounds`
    let poundsToKilos = `${baseValue} pounds = ${Number(baseValue) / kiloToPound} kilos`
    massEl.textContent = `${kilosToPounds} | ${poundsToKilos}`
})
