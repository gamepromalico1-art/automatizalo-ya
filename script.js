const form = document.getElementById("lead-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Cuando tengas tu webhook de n8n, puedes sustituir este bloque por:
  // fetch("TU_WEBHOOK_N8N", {
  //   method: "POST",
  //   headers: {"Content-Type": "application/json"},
  //   body: JSON.stringify(Object.fromEntries(new FormData(form)))
  // });

  message.textContent = "¡Solicitud recibida! Conecta aquí tu webhook de n8n para recibir los leads automáticamente.";
  message.style.color = "#b57cff";
  form.reset();
});
