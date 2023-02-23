import "./style.css";
import {
  createMainContainer,
  createHeader,
  createFooter,
  createLogo,
  createNav,
  createNavElement,
  createSection,
} from "./page-load";

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
