let streak = 0;

function nuevaReflexion() {
  document.getElementById("reflexion-area").style.display = "block";
}

function guardarReflexion() {
  const texto = document.getElementById("texto").value;

  if (texto.trim() !== "") {
    streak++;
    document.getElementById("streak").innerText = streak;
    document.getElementById("mensaje").innerText = "💖 ¡Reflexión guardada! Sigue creciendo.";
    document.getElementById("texto").value = "";
  } else {
    document.getElementById("mensaje").innerText = "⚠️ Escribe algo antes de guardar.";
  }
}
