import { carousel } from './imageDictionary.js';
import { handleForward, handleBackward } from './handlers.js';

let currentImage = 0;

const btnUp = document.getElementById("up-controller");
const btnDown = document.getElementById("down-controller");
const imgCarousel = document.getElementById("img-carousel");

btnUp.addEventListener('click', () => currentImage = handleForward(imgCarousel, carousel, currentImage));
btnDown.addEventListener('click', () => currentImage = handleBackward(imgCarousel, carousel, currentImage));

