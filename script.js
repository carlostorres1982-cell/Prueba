console.log("✅ JavaScript cargado desde script.js");

const boton = document.querySelector("#boton-prueba");

if (boton) {
  boton.addEventListener("click", function () {
    alert("¡Viva Gordi!");
  });
} else {
  console.log("⚠️ No se ha encontrado el botón con id #boton-prueba");
}