var messaggio = document.getElementById("messaggio");

var classMessages = ["messaggio", "testo-successo", "testo-errore"];

function validaTelefono() {
  var telefono = document.getElementById("telefono").value.trim();

  messaggio.className = classMessages[0];
  messaggio.style.display = "block";

  if (!telefono) {
    messaggio.classList.add(classMessages[2]);
    messaggio.innerText = "Inserisci numero di telefono";
    return false;
  }

  if (telefono.length !== 10) {
    messaggio.classList.add(classMessages[2]);
    messaggio.innerText =
      "Il numero di telefono deve contenere esattamente 10 cifre.";
    return false;
  }

  for (let i = 0; i < telefono.length; i++) {
    const char = telefono.charAt(i);
    if (char < "0" || char > "9") {
      messaggio.classList.add(classMessages[2]);
      messaggio.innerText = "Il numero di telefono può contenere solo cifre.";
      return false;
    }
  }

  messaggio.classList.add(classMessages[1]);
  messaggio.innerText = "Numero di telefono valido";
  return true;
}

function resetTutto() {
  document.getElementById("telefono").value = "";
  messaggio.className = classMessages[0];
  messaggio.innerText = "";
  messaggio.style.display = "none";
}
