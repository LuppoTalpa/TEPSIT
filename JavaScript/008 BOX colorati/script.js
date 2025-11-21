const boxes = document.getElementsByClassName("box");
const colori = ["rosso", "verde", "blu", "giallo"];
const stili = ["grande", "rotondo", "ombra"];

function cambiaColore() {
    for (const b of boxes) {
        b.classList.remove(...colori);
        const colore = colori[Math.floor(Math.random() * colori.length)];
        b.classList.add(colore);
    }
}

function cambiaStile() {
    for (const b of boxes) {
        b.classList.remove(...stili);
        const stile = stili[Math.floor(Math.random() * stili.length)];
        b.classList.add(stile);
    }
}

function resetTutto() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove(...stili, ...colori);
        boxes[i].classList.add(colori[i]);
    }
}

function contaBox() {
    let count = [0,0,0,0];
    for (const b of boxes) {
        count[b.classList.contains("rosso") ? 0 : b.classList.contains("verde") ? 1 : b.classList.contains("blu") ? 2 : 3]++;
    }
    let ris = document.getElementById("risultato");
    ris.innerText = "Box rossi: " + count[0] +", \nBox verdi: " + count[1] + ", \nBox blu: " + count[2] + ", \nBox gialli: " + count[3];
}