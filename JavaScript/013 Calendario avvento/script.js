// Array con 24 frasi per il calendario dell'avvento
var messaggiAvvento = [
  "Giorno 1: Pronti, partenza... Natale! Si parte con una cioccolata bollente ☕",
  "Giorno 2: Il countdown è ufficialmente iniziata. Mancano solo 23 giorni! ⏰",
  "Giorno 3: Pro-tip: le luci natalizie aumentano l'umore dell'80% ✨",
  "Giorno 4: Missione: trovare il panettone più buono del supermercato 🍰",
  "Giorno 5: Alert: la prima canzone di Natale in radio è stata avvistata! 🎶",
  "Giorno 6: Bonus: ogni decorazione appesa dà +10 punti festività 🎄",
  "Giorno 7: Settimana 1 completata! Sei un vero pro dell'avvento 🏅",
  "Giorno 8: Side quest: fare un regalo a sorpresa a qualcuno 🎁",
  "Giorno 9: Suggerimento: i biscotti fatti in casa sono OP 🍪",
  "Giorno 10: Doppia cifra! Il Natale si avvicina pericolosamente 🎯",
  "Giorno 11: Power-up: un abbraccio natalizio ripristina energia ❤️",
  "Giorno 12: Metà strada! Hai superato il boss della pazienza 🎮",
  "Giorno 13: Easter egg: sotto ogni decorazione c'è un ricordo ✨",
  "Giorno 14: Challenge: guardare un film natalizio classico 🎬",
  "Giorno 15: Countdown: 10... 9... 8... si parte con il finale! 🚀",
  "Giorno 16: Secret achievement: resistere allo shopping compulsivo 💪",
  "Giorno 17: Pro-tip: le luci colorate sono terapia per l'anima 🌈",
  "Giorno 18: Ultima settimana! Le emozioni vanno in modalità turbo 💨",
  "Giorno 19: Mission: scrivere i biglietti più originali ever 🖊️",
  "Giorno 20: Suggerimento: la playlist natalizia è un must 🎧",
  "Giorno 21: 3 giorni alla meta! Preparare le energie ⚡",
  "Giorno 22: Penultimo giorno! L'hype è alle stelle 🌟",
  "Giorno 23: Final boss: la lista dei regali. Sei pronto? ⚔️📝",
  "Giorno 24: One day to go! Domani è Natale! 🎅",
  "Giorno 25: VITTORIA! Buon Natale a tutti! Hai completato la missione! 🎄🎉",
];

var classiGiorni = ["giorno-passato", "giorno-corrente", "giorno-futuro"];

// Ottengo la data corrente
var dataCorrente = new Date();
var giornoCorrente = dataCorrente.getDate();

var caselle = document.getElementsByClassName("casella-giorno");

for (var i = 0; i < 25; i++) {
  if (i < giornoCorrente - 1) {
    caselle[i].classList.remove(...classiGiorni);
    caselle[i].classList.add("giorno-passato");
  } else if (i == giornoCorrente - 1) {
    caselle[i].classList.remove(...classiGiorni);
    caselle[i].classList.add("giorno-corrente");
  } else {
    caselle[i].classList.remove(...classiGiorni);
    caselle[i].classList.add("giorno-futuro");
  }
}

var popup = document.getElementById("finestra-messaggio");

// Funzione per aprire il messaggio del giorno
function apriMessaggioGiorno(numeroGiorno) {
  if (numeroGiorno <= giornoCorrente) {
    var title = document.getElementById("titolo-giorno-popup");
    var text = document.getElementById("messaggio-popup-testo");

    title.innerText = "Giorno " + numeroGiorno;
    text.innerText = messaggiAvvento[numeroGiorno - 1];
    popup.style.display = "block";
  }
} //fine funzione apriMessaggioGiorno

// Funzione per chiudere il popup
function chiudiPopup() {
  popup.style.display = "none";
}
