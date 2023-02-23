import "./style.css";
import {
  createMainContainer,
  createHeader,
  createFooter,
  createLogo,
} from "./page-load";

const body = document.querySelector("body");
const mainContainer = createMainContainer(body);
const header = createHeader(mainContainer);
const logo = createLogo(header);
const footer = createFooter(body);
