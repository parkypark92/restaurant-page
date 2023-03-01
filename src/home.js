import { createSection } from "./page-load";
import image1 from "./images/restaurant1.jpg";
import image2 from "./images/restaurant2.jpg";
import image3 from "./images/restaurant3.jpg";
export { homeSection };

const homeSection = createSection("home");

const welcome = document.createElement("h1");
homeSection.appendChild(welcome);
welcome.textContent = "Welcome!";

const content = document.createElement("div");
content.classList.add("home-content");
homeSection.appendChild(content);

const aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-container");
content.appendChild(aboutContainer);

const about1 = document.createElement("p");
aboutContainer.appendChild(about1);
about1.textContent = `Since it's establishment in 2023, Bebe's has been a source of happiness for all. Boasting a dilectable rotating menu of world class food & drink, as well as top class live music, every visit to Bebe's is a new experience!`;

const about2 = document.createElement("p");
aboutContainer.appendChild(about2);
about2.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis possimus assumenda architecto debitis nulla cumque ducimus! Eligendi laboriosam eaque rem reiciendis, adipisci doloremque minus ipsa nisi necessitatibus, expedita, dicta ullam vero esse quia. Nobis rem architecto repudiandae nulla dolorem. Eveniet deleniti doloribus consequatur laudantium velit est ea enim cumque!`;

const about3 = document.createElement("p");
aboutContainer.appendChild(about3);
about3.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum iure, ea itaque eius, voluptates velit, corporis consequatur sequi quia eum beatae sint nulla asperiores adipisci aut fugiat aliquam quisquam?`;

const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
content.appendChild(imageContainer);

const div1 = document.createElement("div");
imageContainer.appendChild(div1);
const div2 = document.createElement("div");
imageContainer.appendChild(div2);
const div3 = document.createElement("div");
imageContainer.appendChild(div3);

const imageOne = new Image();
imageOne.src = image1;
div1.appendChild(imageOne);

const imageTwo = new Image();
imageTwo.src = image2;
div2.appendChild(imageTwo);

const imageThree = new Image();
imageThree.src = image3;
div3.appendChild(imageThree);
