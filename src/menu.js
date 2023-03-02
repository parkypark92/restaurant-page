import { createSection } from "./page-load";
export { menuSection };

const menuSection = createSection("menu");

const menuHeading = document.createElement("h1");
menuHeading.textContent = `Our menu rotates on a monthly basis, so there's always something new to try. Bon appetit!`;
menuSection.appendChild(menuHeading);

const content = document.createElement("div");
content.classList.add("menu-content");
menuSection.appendChild(content);

const starters = document.createElement("section");
content.appendChild(starters);

const starterHeading = document.createElement("h2");
starterHeading.textContent = `Starter`;
starters.appendChild(starterHeading);

const starterList = document.createElement("ul");
starters.appendChild(starterList);

const starterOne = document.createElement("li");
starterOne.textContent = `Homemade Soup of the Day`;
starterList.appendChild(starterOne);

const starterTwo = document.createElement("li");
starterTwo.textContent = `Rustic Cheese & Meat Platter`;
starterList.appendChild(starterTwo);

const starterThree = document.createElement("li");
starterThree.textContent = `Roasted Red Pepper and Caramelized Onion Bruchette`;
starterList.appendChild(starterThree);

const mains = document.createElement("section");
content.appendChild(mains);

const mainHeading = document.createElement("h2");
mainHeading.textContent = `Main`;
mains.appendChild(mainHeading);

const mainList = document.createElement("ul");
mains.appendChild(mainList);

const mainOne = document.createElement("li");
mainOne.textContent = `Creamy Lemon Butter Chicken`;
mainList.appendChild(mainOne);

const mainTwo = document.createElement("li");
mainTwo.textContent = `Summer Salmon Tray Bake`;
mainList.appendChild(mainTwo);

const mainThree = document.createElement("li");
mainThree.textContent = `Avocado and Black Bean Burrito`;
mainList.appendChild(mainThree);

const deserts = document.createElement("section");
content.appendChild(deserts);

const desertHeading = document.createElement("h2");
desertHeading.textContent = `Desert`;
deserts.appendChild(desertHeading);

const desertList = document.createElement("ul");
deserts.appendChild(desertList);

const desertOne = document.createElement("li");
desertOne.textContent = `Trio of Ice Cream`;
desertList.appendChild(desertOne);

const desertTwo = document.createElement("li");
desertTwo.textContent = `Sticky Toffee Pudding`;
desertList.appendChild(desertTwo);

const desertThree = document.createElement("li");
desertThree.textContent = `Bebe's Special Treat`;
desertList.appendChild(desertThree);
