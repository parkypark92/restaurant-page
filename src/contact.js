export { createContactSection };

function createContactSection(element) {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");
  element.appendChild(contactSection);
}
