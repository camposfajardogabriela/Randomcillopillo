const cantidad = ["Innumerables", "Infinitos", "Crecientes", "Poquiticos", "Pequeños"];
const tiempo = ["días antes", "momentos después", "jueves", "espacios antes", "años luego"];
const ubicacion = ["en la casa azul, recién pintada,", "donde las rosas comestibles", "en una nube rosada", "en el salón de clases", "en la galaxia más chiquita del universo"];
const profesionnombre = ["la bañista, Ana Isabel,", "el capitán de sueños, Ismael,", "la vendedora de rosas, Leidi,", "la pajarera, Manuela,", "la gata negra, Kodak"];
const verbo = ["querría", "podría", "intentaría", "sabría", "debería"];
const accion = ["saltar", "llorar", "celebrar", "comer", "estudiar"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateParagraph() {
  const parts = [
    getRandomElement(cantidad),
    getRandomElement(tiempo),
    getRandomElement(ubicacion),
    getRandomElement(profesionnombre),
    getRandomElement(verbo),
    getRandomElement(accion),
  ];
  
  return parts.join(' ');
}

// On page load, insert the paragraph into the container
window.onload = () => {
  const paragraph = document.getElementById('randomParagraph');
  paragraph.textContent = generateParagraph() + '.';
};