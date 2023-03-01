import "./style.css";
import "./home-style.css";
import {
  createMainContainer,
  createHeader,
  createFooter,
  createLogo,
  createNav,
  createNavElement,
} from "./page-load";
import { homeSection } from "./home";

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

mainContainer.appendChild(homeSection);
