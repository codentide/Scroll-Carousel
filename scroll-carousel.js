const cards = document.querySelectorAll(".item-container");

cards.forEach((card) => {
  const title = card.querySelector(".card-title");
  const background = card.querySelector(".background");

  const titleContent = title.textContent;

  document.addEventListener("DOMContentLoaded", function () {
    var nombreImagen = title.textContent.toLowerCase();
    background.src = "./assets/champions/champion-" + nombreImagen + ".jpg";
  });
});

// Obtener todas las etiquetas img con la clase "class-icon"
const iconImgs = document.querySelectorAll("img.class-icon");

// Iterar sobre todas las etiquetas img con la clase "class-icon"
iconImgs.forEach((img) => {
  // Obtener el valor del atributo "alt" de la etiqueta img actual
  const alt = img.getAttribute("alt").toLowerCase();

  // Usar el valor de "alt" para construir la nueva dirección URL
  const newSrc = `./assets/icons/${alt}-icon.svg`;

  // Actualizar el atributo "src" de la etiqueta img actual con la nueva dirección URL
  img.setAttribute("src", newSrc);
});

//Código para arrastrar los slides

const scrollContainer = document.querySelector(".scroll-snap");

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1; // Ajustar la velocidad de desplazamiento
  scrollContainer.scrollLeft = scrollLeft - walk;
});
