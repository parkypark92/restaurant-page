import { createSection } from "./page-load";
export { contactSection };

const contactSection = createSection("contact");

const mainContact = document.createElement("div");
mainContact.classList.add("contact-contain");
contactSection.appendChild(mainContact);

const mainContactHead = document.createElement("h2");
mainContactHead.textContent = `General enquiries`;
mainContact.appendChild(mainContactHead);

const generalEmail = document.createElement("p");
generalEmail.textContent = `info@bebesrestaurant.com`;
mainContact.appendChild(generalEmail);

const generalphone = document.createElement("p");
generalphone.textContent = `079685743524`;
mainContact.appendChild(generalphone);

const musicContact = document.createElement("div");
musicContact.classList.add("contact-contain");
contactSection.appendChild(musicContact);

const musicContactHead = document.createElement("h2");
musicContactHead.textContent = `Live music enquiries`;
musicContact.appendChild(musicContactHead);

const musicEmail = document.createElement("p");
musicEmail.textContent = `livemusic@bebesrestaurant.com`;
musicContact.appendChild(musicEmail);
