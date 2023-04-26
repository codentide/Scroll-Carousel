// Ingresar imagenes
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

// Detectar la cantidad de elementos con la clase "item-container"
const itemContainers = document.querySelectorAll(".item-container");
const numItems = itemContainers.length;

// Crear los puntos de posición
const dotContainer = document.querySelector(".dot-container");
for (let i = 0; i < numItems; i++) {
  const dot = document.createElement("span");
  dot.classList.add("position-dot");
  dotContainer.appendChild(dot);
}

// Añadir la clase "active" al primer punto de posición
const positionDots = document.querySelectorAll(".position-dot");
positionDots[0].classList.add("active");

// Añadir los listeners de evento para los botones "next" y "prev"
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carousel = document.querySelector(".scroll-snap");
const itemScrollContainers = document.querySelectorAll(
  ".scroll-snap-container"
);
const itemContainerWidth = itemScrollContainers[0].offsetWidth;
let currentPosition = 0;

prevButton.addEventListener("click", () => {
  // Encontrar el punto de posición activo y remover la clase "active"
  const activeDot = document.querySelector(".position-dot.active");
  activeDot.classList.remove("active");

  // Encontrar el índice del punto de posición activo y calcular el índice del punto de posición anterior
  const activeIndex = Array.from(positionDots).indexOf(activeDot);
  const prevIndex = activeIndex === 0 ? numItems - 1 : activeIndex - 1;

  // Añadir la clase "active" al punto de posición anterior
  positionDots[prevIndex].classList.add("active");

  // Hacer scroll al inicio del carrusel si se encuentra en el primer elemento
  if (currentPosition === 0) {
    carousel.scrollLeft = itemContainerWidth * (numItems - 1);
    currentPosition = itemContainerWidth * (numItems - 1);
  } else {
    carousel.scrollLeft -= itemContainerWidth;
    currentPosition -= itemContainerWidth;
  }
});

nextButton.addEventListener("click", () => {
  // Encontrar el punto de posición activo y remover la clase "active"
  const activeDot = document.querySelector(".position-dot.active");
  activeDot.classList.remove("active");

  // Encontrar el índice del punto de posición activo y calcular el índice del punto de posición siguiente
  const activeIndex = Array.from(positionDots).indexOf(activeDot);
  const nextIndex = activeIndex === numItems - 1 ? 0 : activeIndex + 1;

  // Añadir la clase "active" al punto de posición siguiente
  positionDots[nextIndex].classList.add("active");

  // Hacer scroll al inicio del carrusel si se encuentra en el último elemento
  if (currentPosition === itemContainerWidth * (numItems - 1)) {
    carousel.scrollLeft = 0;
    currentPosition = 0;

    // Actualizar el punto de posición activo
    activeDot.classList.remove("active");
    positionDots[0].classList.add("active");
  } else {
    carousel.scrollLeft += itemContainerWidth;
    currentPosition += itemContainerWidth;
  }
  console.log(currentPosition);
});

// Agregar listeners de evento para los puntos de posición

positionDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Encontrar el punto de posición activo y remover la clase "active"
    const activeDot = document.querySelector(".position-dot.active");
    activeDot.classList.remove("active");

    // Agregar la clase "active" al punto de posición seleccionado
    dot.classList.add("active");

    // Hacer scroll hacia la imagen correspondiente en el carrusel
    const scrollPosition = index * itemContainerWidth;
    carousel.scrollLeft = scrollPosition;
    currentPosition = scrollPosition;

    console.log(scrollPosition);
  });
});
