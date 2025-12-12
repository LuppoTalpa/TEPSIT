var display = document.getElementById("monitor");
let numeroPrecedente = "";
let operatoreCorrente = "";
let resetDisplay = false;

function digit(n) {
  display.value += n;
}

function operazione(op) {
  if (!isNaN(display.value)) {
    numeroPrecedente = display.value;
    display.value = "";
  }

  operatoreCorrente = op;
}

function risultato() {
    switch (operatoreCorrente) {
        case "+": {
            display.value = Number(display.value) + Number(numeroPrecedente);
        }
    }
}

function cancella() {}

function del() {}

function perc() {}

function refresh() {}
