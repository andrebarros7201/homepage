import "./style.css";
import placeholderImage from "./images/placeholder.jpg";

const aboutMeLeft = document.querySelector("#left");
const image = new Image();
image.src = placeholderImage;
aboutMeLeft.appendChild(image);

const contact = document.querySelector(".contact .right");
const image2 = new Image();
image2.src = placeholderImage;
contact.appendChild(image2);
