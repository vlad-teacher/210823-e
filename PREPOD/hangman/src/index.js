// 5. создать кнопку для отправки введеных пользователем данных 
// 7. после ввода буквы мы должны проверять загаданное слово
// 7.1 если отгадали букву (не учитывать регистр) ТО картинку оставляем,отображаем угаданную букву на нужном месте (или несколько букв)
// 7.2 если не отгадали ТО меняем картинку
// 7.2.1 если картинка номер 4 ТО заканчиваем игру (дизейблим инпуты) 


import img1link from '../images/1.png';
import img2link from '../images/2.png';
import img3link from '../images/3.png';
import img4link from '../images/4.png';

const hangmanImg = document.getElementById('hangman');
const word = document.getElementById('word');
const userLetterInput = document.getElementById('userLetter');
const btn = document.getElementById('btn');

const images = [img1link, img2link, img3link, img4link];


function getRandomWord () {
    const secretWords = ['table', 'chair', 'spoon', 'laptop', 'house', 'Valerchik'];

    const randomIndex = Math.floor(Math.random() * secretWords.length);

    return secretWords[randomIndex];
}

const currentWord = getRandomWord();


Array.from(currentWord).forEach(() => {
    const span = document.createElement('span');
    span.textContent = '_';

    word.append(span);
});


