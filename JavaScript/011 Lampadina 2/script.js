var lampOff = "img/lampadina_off.png";
var lampOn = "img/lampadina_on.png";

function AccendiSpegni() {
  let lamp = document.getElementById("lamp");
  let but = document.getElementById("but");

  if (lamp.src.endsWith(lampOff)) {
    lamp.src = lampOn;
    but.innerText = "Spegni";
  } else {
    lamp.src = lampOff;
    but.innerText = "Accendi";
  }
}