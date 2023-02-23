export { createMenuSection };

function createMenuSection(element) {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  element.appendChild(menuSection);
}
