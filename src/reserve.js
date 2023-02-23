export { createReserveSection };

function createReserveSection(element) {
  const reserveSection = document.createElement("section");
  reserveSection.classList.add("reserve-section");
  element.appendChild(reserveSection);
}
