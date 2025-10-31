var peso = document.getElementById("peso");
var h = document.getElementById("altezza");
var reply = document.getElementById("ris");

function calculateBMI() {
  let weight = parseFloat(peso.value);
  let height = parseFloat(h.value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    reply.textContent = "Inserisci valori validi.";
    return;
  }

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Sottopeso";
  } else if (bmi < 25) {
    category = "Normopeso";
  } else if (bmi < 30) {
    category = "Sovrappeso";
  } else if (bmi < 35) {
    category = "Obesità di classe I";
  } else if (bmi < 40) {
    category = "Obesità di classe II";
  } else {
    category = "Obesità di classe III";
  }

  reply.textContent = `Il tuo BMI è: ${bmi.toFixed(2)} (${category})`;
}
