import "./style.css";
import placeholderImage from "./images/placeholder.jpg";

const aboutMeLeft = document.querySelector("#left");
const image = new Image();
image.src = placeholderImage;

aboutMeLeft.appendChild(image);
