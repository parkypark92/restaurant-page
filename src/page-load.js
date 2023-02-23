export { createMainContainer, createHeader, createFooter, createLogo };

function createMainContainer(element) {
  const main = document.createElement("div");
  main.classList.add("main-contain");
  element.appendChild(main);
  return main;
}

function createHeader(element) {
  const header = document.createElement("nav");
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

function createFooter(element) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  element.appendChild(footer);
  return footer;
}
