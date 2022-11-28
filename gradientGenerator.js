window.addEventListener("load",setGradientColor);

const css = document.querySelector('h3');
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')
const button = document.getElementById('random');

function setGradientColor(){
    body.style.background =  "linear-gradient(to right,"
    + color1.value
    +', '
    + color2.value
    +')';
    css.textContent = body.style.background;
}

function random_color(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function generateColors(){
    color1.value = `#${random_color()}`;
    color2.value = `#${random_color()}`;
    setGradientColor();
}

color1.addEventListener("input",setGradientColor)
color2.addEventListener("input",setGradientColor)
button.addEventListener("click",generateColors);
