'use strict'
//Переменные
const buttonCorrect = document.querySelector(".button-correct");
const buttonIncorrect = document.querySelector(".button-incorrect");

//Массив названий цветов
let colorNames = ['Красный','Жёлтый','Зелёный','Синий','Фиолетовый'];

//Массив цветов
let colors = ['#f00', '#ff0', '#0f0', '#00f', '#f0f'];

//Случайный индекс
const getRandomIndex = () => {
    let index = Math.floor(Math.random()*5);
    return index;
}

//Проверка
function handleButtonClick(isCorrect) {
    if ((isCorrect && colorIndex === colorNameIndex) || (!isCorrect && colorIndex !== colorNameIndex)) {
        counter++;
    } else {
        alert("Ваш результат: " + counter);
        location.reload();
        return;
    }
    colorIndex = getRandomIndex();
    colorNameIndex = getRandomIndex();
    heading.innerHTML = colorNames[colorNameIndex];
    heading.style.color = colors[colorIndex];
}

//Кнопка О
buttonCorrect.addEventListener("click", () => {
    handleButtonClick(true);
});

//Кнопка Х
buttonIncorrect.addEventListener("click", () => {
    handleButtonClick(false);
});

let counter = 0;
let colorIndex = getRandomIndex();
let colorNameIndex = getRandomIndex();


const heading = document.getElementById('colored-text');
heading.innerHTML = colorNames[colorNameIndex];
heading.style.color = colors[colorIndex];

