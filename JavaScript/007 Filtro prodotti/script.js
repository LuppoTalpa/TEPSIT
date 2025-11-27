// Product filter functions using getElementsByClassName
function mostraTutti() {
  var prodotti = document.getElementsByClassName("prodotto");
  for (var i = 0; i < prodotti.length; i++) {
    prodotti[i].classList.remove("nascondi");
  }
}

function filtraElettronica() {
  mostraTutti();
  var prodotti = document.getElementsByClassName("prodotto");
  for (var i = 0; i < prodotti.length; i++) {
    if (!prodotti[i].classList.contains("elettronica")) {
      prodotti[i].classList.add("nascondi");
    }
  }
}

function filtraAbbigliamento() {
  mostraTutti();
  var prodotti = document.getElementsByClassName("prodotto");
  for (var i = 0; i < prodotti.length; i++) {
    if (!prodotti[i].classList.contains("vestiti")) {
      prodotti[i].classList.add("nascondi");
    }
  }
}

function filtraLibri() {
  mostraTutti();
  var prodotti = document.getElementsByClassName("prodotto");
  for (var i = 0; i < prodotti.length; i++) {
    if (!prodotti[i].classList.contains("libri")) {
      prodotti[i].classList.add("nascondi");
    }
  }
}
