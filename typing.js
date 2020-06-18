window.addEventListener('load', init);
let time = 6;
let score = 0;
let isplaying;
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
];

//initialization
function init() {
    showWords(words);
    setInterval(Countdown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);

}
function showWords(word) {
    const index = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[index];
}
function Countdown() {
    if (time > 0)
        time--;
    else if (time === 0) {
        isplaying = false;
        score = -1;
    }
    timeDisplay.innerHTML = time;

}
function startMatch() {
    if (matchwords()) {
        time = 6;
        wordInput.value = "";
        score++;
        showWords(words);
    }
    if (score === -1)
        scoreDisplay.innerHTML = 0;

    else
        scoreDisplay.innerHTML = score;
}
function matchwords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!";
        return true;
    }
    else {
        message.innerHTML = "Incorrect!!";
        return false;
    }
}
function checkStatus() {
    if (!isplaying && time === 0)
        message.innerHTML = "GamEoVER!!!"
}