var lampada = document.getElementById("lamp");
var lampOff = "./img/lampadina_off.png";
var lampOn = "./img/lampadina_on.png";

function Accendi() {
  lampada.src = lampOn;
}

function Spegni() {
  lampada.src = lampOff;
}
