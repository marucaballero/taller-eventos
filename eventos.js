const div = document.getElementById("div");

div.addEventListener("click", showSaludo);

function showSaludo() {
    div.stopPropagation();
    alert("¡Hola! Soy el div");
  }