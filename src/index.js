import "./style.css";
import "./home-style.css";
import "./menu-style.css";
import "./reserve-style.css";
import {
  createMainContainer,
  createHeader,
  createFooter,
  createLogo,
  createNav,
  createNavElement,
} from "./page-load";
import { homeSection } from "./home";
import { menuSection } from "./menu";
import { reserveSection } from "./reserve";

const body = document.querySelector("body");
const mainContainer = createMainContainer(body);
const header = createHeader(mainContainer);
const logo = createLogo(header);
const navBar = createNav(header);
const footer = createFooter(body);
const homeTab = createNavElement(navBar, "HOME");
const menuTab = createNavElement(navBar, "MENU");
const reserveTab = createNavElement(navBar, "RESERVATION");
const contactTab = createNavElement(navBar, "CONTACT");
const tabs = [homeTab, menuTab, reserveTab, contactTab];

mainContainer.appendChild(homeSection);
homeTab.classList.add("selected");

function displaySection(e) {
  mainContainer.removeChild(mainContainer.lastChild);
  for (let tab of tabs) {
    tab.classList.remove("selected");
  }
  e.target.classList.add("selected");
  mainContainer.appendChild(this);
}

homeTab.addEventListener("click", displaySection.bind(homeSection));

menuTab.addEventListener("click", displaySection.bind(menuSection));

reserveTab.addEventListener("click", displaySection.bind(reserveSection));
