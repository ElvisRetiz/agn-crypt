import { carousel, alphabet } from './dictionary.js';
import {
    handleForward,
    handleBackward,
    handleUp,
    handleDown,
    handleCheck
} from './handlers.js';

let currentImage = 0;
let currentLetterOne = 0;
let currentLetterTwo = 0;
let currentLetterThree = 0;
let currentLetterFour = 0;
let currentLetterFive = 0;
let currentLetterSix = 0;
let currentLetterSeven = 0;
let currentLetterEight = 0;
let currentLetterNine = 0;
let currentLetterTen = 0;
let currentLetterEleven = 0;

const btnLeft = document.getElementById("left-controller");
const btnRight = document.getElementById("right-controller");
const btnUpOne = document.getElementById("up-controller-one");
const btnDownOne = document.getElementById("down-controller-one");
const btnUpTwo = document.getElementById("up-controller-two");
const btnDownTwo = document.getElementById("down-controller-two");
const btnUpThree = document.getElementById("up-controller-three");
const btnDownThree = document.getElementById("down-controller-three");
const btnUpFour = document.getElementById("up-controller-four");
const btnDownFour = document.getElementById("down-controller-four");
const btnUpFive = document.getElementById("up-controller-five");
const btnDownFive = document.getElementById("down-controller-five");
const btnUpSix = document.getElementById("up-controller-six");
const btnDownSix = document.getElementById("down-controller-six");
const btnUpSeven = document.getElementById("up-controller-seven");
const btnDownSeven = document.getElementById("down-controller-seven");
const btnUpEight = document.getElementById("up-controller-eight");
const btnDownEight = document.getElementById("down-controller-eight");
const btnUpNine = document.getElementById("up-controller-nine");
const btnDownNine = document.getElementById("down-controller-nine");
const btnUpTen = document.getElementById("up-controller-ten");
const btnDownTen = document.getElementById("down-controller-ten");
const btnUpEleven = document.getElementById("up-controller-eleven");
const btnDownEleven = document.getElementById("down-controller-eleven");
const btnCheck = document.getElementById("check-message");

const imgCarousel = document.getElementById("img-carousel");

const alphabetContainerOne = document.getElementById("alphabet-container-one");
const alphabetContainerTwo = document.getElementById("alphabet-container-two");
const alphabetContainerThree = document.getElementById("alphabet-container-three");
const alphabetContainerFour = document.getElementById("alphabet-container-four");
const alphabetContainerFive = document.getElementById("alphabet-container-five");
const alphabetContainerSix = document.getElementById("alphabet-container-six");
const alphabetContainerSeven = document.getElementById("alphabet-container-seven");
const alphabetContainerEight = document.getElementById("alphabet-container-eight");
const alphabetContainerNine = document.getElementById("alphabet-container-nine");
const alphabetContainerTen = document.getElementById("alphabet-container-ten");
const alphabetContainerEleven = document.getElementById("alphabet-container-eleven");

btnLeft.addEventListener('click', () => currentImage = handleBackward(imgCarousel, carousel, currentImage));
btnRight.addEventListener('click', () => currentImage = handleForward(imgCarousel, carousel, currentImage));
btnUpOne.addEventListener('click', () => currentLetterOne = handleUp(alphabetContainerOne, alphabet, currentLetterOne));
btnDownOne.addEventListener('click', () => currentLetterOne = handleDown(alphabetContainerOne, alphabet, currentLetterOne));
btnUpTwo.addEventListener('click', () => currentLetterTwo = handleUp(alphabetContainerTwo, alphabet, currentLetterTwo));
btnDownTwo.addEventListener('click', () => currentLetterTwo = handleDown(alphabetContainerTwo, alphabet, currentLetterTwo));
btnUpThree.addEventListener('click', () => currentLetterThree = handleUp(alphabetContainerThree, alphabet, currentLetterThree));
btnDownThree.addEventListener('click', () => currentLetterThree = handleDown(alphabetContainerThree, alphabet, currentLetterThree));
btnUpFour.addEventListener('click', () => currentLetterFour = handleUp(alphabetContainerFour, alphabet, currentLetterFour));
btnDownFour.addEventListener('click', () => currentLetterFour = handleDown(alphabetContainerFour, alphabet, currentLetterFour));
btnUpFive.addEventListener('click', () => currentLetterFive = handleUp(alphabetContainerFive, alphabet, currentLetterFive));
btnDownFive.addEventListener('click', () => currentLetterFive = handleDown(alphabetContainerFive, alphabet, currentLetterFive));
btnUpSix.addEventListener('click', () => currentLetterSix = handleUp(alphabetContainerSix, alphabet, currentLetterSix));
btnDownSix.addEventListener('click', () => currentLetterSix = handleDown(alphabetContainerSix, alphabet, currentLetterSix));
btnUpSeven.addEventListener('click', () => currentLetterSeven = handleUp(alphabetContainerSeven, alphabet, currentLetterSeven));
btnDownSeven.addEventListener('click', () => currentLetterSeven = handleDown(alphabetContainerSeven, alphabet, currentLetterSeven));
btnUpEight.addEventListener('click', () => currentLetterEight = handleUp(alphabetContainerEight, alphabet, currentLetterEight));
btnDownEight.addEventListener('click', () => currentLetterEight = handleDown(alphabetContainerEight, alphabet, currentLetterEight));
btnUpNine.addEventListener('click', () => currentLetterNine = handleUp(alphabetContainerNine, alphabet, currentLetterNine));
btnDownNine.addEventListener('click', () => currentLetterNine = handleDown(alphabetContainerNine, alphabet, currentLetterNine));
btnUpTen.addEventListener('click', () => currentLetterTen = handleUp(alphabetContainerTen, alphabet, currentLetterTen));
btnDownTen.addEventListener('click', () => currentLetterTen = handleDown(alphabetContainerTen, alphabet, currentLetterTen));
btnUpEleven.addEventListener('click', () => currentLetterEleven = handleUp(alphabetContainerEleven, alphabet, currentLetterEleven));
btnDownEleven.addEventListener('click', () => currentLetterEleven = handleDown(alphabetContainerEleven, alphabet, currentLetterEleven));
btnCheck.addEventListener('click', () => handleCheck(currentLetterOne, currentLetterTwo, currentLetterThree, currentLetterFour, currentLetterFive, currentLetterSix, currentLetterSeven, currentLetterEight, currentLetterNine, currentLetterTen, currentLetterEleven))