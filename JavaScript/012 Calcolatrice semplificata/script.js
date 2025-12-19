var display = document.getElementById("monitor");
let numeroPrecedente = "";
let operatoreCorrente = "";
let resetDisplay = false;

function digit(n) {
  if (resetDisplay) {
    display.value = n;
    resetDisplay = false;
  } else {
    display.value += n;
  }
}

function operazione(op) {
  if (!isNaN(display.value)) {
    numeroPrecedente = display.value;
    display.value = "";
  }

  operatoreCorrente = op;
  resetDisplay = true;
}

function risultato() {
  switch (operatoreCorrente) {
    case "+": {
      display.value = Number(numeroPrecedente) + Number(display.value);
      break;
    }
    case "-": {
      display.value = Number(numeroPrecedente) - Number(display.value);
      break;
    }
    case "*": {
      display.value = Number(numeroPrecedente) * Number(display.value);
      break;
    }
    case "/": {
      display.value = Number(numeroPrecedente) / Number(display.value);
      break;
    }
  }
  resetDisplay = true;
}

function cancella() {
  resetDisplay = true;
  numeroPrecedente = "";
  operatoreCorrente = "";
}

function del() {
  if (resetDisplay) {
    display.value = "";
    resetDisplay = false;
    return;
  }

  display.value = display.value.toString().slice(0, -1); // [web:3][web:9]
}

function perc() {
  const current = Number(display.value);

  if (display.value === "" || Number.isNaN(current)) return;

  if (numeroPrecedente !== "" && operatoreCorrente !== "" && !resetDisplay) {
    const base = Number(numeroPrecedente);
    const percentValue = (base * current) / 100;

    display.value = String(percentValue);
  } else {
    display.value = String(current / 100);
  }

  resetDisplay = true;
}

function refresh() {
  // Clear display (tipo "CE"): pulisce solo l'input corrente, non lo stato dell'operazione
  display.value = "";
  resetDisplay = true;
}
