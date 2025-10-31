out = document.getElementById("prova");

document.getElementById("nom").addEventListener("input", () => {
  aggiorna(document.getElementById("nom"));
});

function aggiorna(valore) {
  out.textContent = valore.value;
}
