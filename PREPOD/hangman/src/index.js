import img1link from "../images/1.png";
import img2link from "../images/2.png";
import img3link from "../images/3.png";
import img4link from "../images/4.png";
import './some.css';
import classes from './style.module.css';


const hangmanImg = document.getElementById("hangman");
const word = document.getElementById("word");
const userLetterInput = document.getElementById("userLetter");
const btn = document.getElementById("btn");

const images = [img1link, img2link, img3link, img4link];
console.log(classes);
let imageIndex = 0;

function getRandomWord() {
  const secretWords = [
    "table",
    "chair",
    "spoon",
    "laptop",
    "house",
    "Valerchik",
  ];

  const randomIndex = Math.floor(Math.random() * secretWords.length);

  return secretWords[randomIndex];
}

const currentWord = getRandomWord();

Array.from(currentWord).forEach(() => {
  const span = document.createElement("span");
  span.textContent = "_";

  word.append(span);
});

const endGameWithMessage = (message) => {
  btn.disabled = true;
  userLetterInput.disabled = true;
  const h1 = document.createElement("h1");
  h1.textContent = message;

  h1.classList.add(classes.blabla);

  document.body.prepend(h1);
};

btn.addEventListener("click", () => {
  const inputValue = userLetterInput.value;
  userLetterInput.value = "";
  userLetterInput.focus();
  const wordArr = Array.from(currentWord);
  let wasLetterFound = false;

  wordArr.forEach((letter, letterIndex) => {
    const lettersAreEqual = letter.toUpperCase() === inputValue.toUpperCase();

    if (lettersAreEqual) {
      word.children[letterIndex].textContent = inputValue.toUpperCase();
      wasLetterFound = true;
    }
  });

  if (!wasLetterFound) {
    hangmanImg.src = images[++imageIndex];
  }

  if (wasLetterFound) {
    const allLettersDiscovered = Array.from(word.children).every(
      ({ textContent }) => textContent !== "_"
    );

    if (allLettersDiscovered) {
      endGameWithMessage("YOU WIN!");
    }
  }

  if (imageIndex === images.length - 1) {
    endGameWithMessage("YOU LOST!");
  }
});


