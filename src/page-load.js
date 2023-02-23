export {
  createMainContainer,
  createHeader,
  createFooter,
  createLogo,
  createNav,
  createNavElement,
  createSection,
};

function createMainContainer(element) {
  const main = document.createElement("div");
  main.classList.add("main-contain");
  element.appendChild(main);
  return main;
}

function createHeader(element) {
  const header = document.createElement("header");
  header.classList.add("header");
  element.appendChild(header);
  return header;
}

function createLogo(element) {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-contain");
  element.appendChild(logoContainer);
  const logo = document.createElement("h1");
  logo.textContent = `ANDREW & LAURA's`;
  logo.classList.add("logo");
  logoContainer.appendChild(logo);
}

function createNav(element) {
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");
  element.appendChild(nav);
  return nav;
}

function createNavElement(element, tabName) {
  const tab = document.createElement("div");
  tab.classList.add("nav-tab");
  tab.textContent = tabName;
  element.appendChild(tab);
  return tab;
}

function createFooter(element) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  element.appendChild(footer);
  return footer;
}

function createSection(element, section) {
  const currentSection = document.createElement("section");
  currentSection.classList.add(`${section}-container`);
  element.appendChild(currentSection);
  return currentSection;
}
